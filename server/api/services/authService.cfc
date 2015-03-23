component accessors="true" {

	property version;
	property userRoles;
	property accessLevels;

	init();
	/**
	* Setup roles/access levels based on blog:
	* http://www.frederiknakstad.com/2013/01/21/authentication-in-single-page-applications-with-angular-js/
	**/
	public function init(){
		setVersion( 1 );

		setUserRoles( {
	        public: 1, // 001
	        user:   2, // 010
	        admin:  4  // 100
	    });

	    setAccessLevels( {
	        public: bitOr( bitOr( userRoles.public, userRoles.user ), userRoles.admin ),// 111
	        anon:   userRoles.public,  // 001
	        user:   bitOr( userRoles.user, userRoles.admin ), // 110
	        admin:  userRoles.admin    // 100
	    });

	    return this;

	}

	public function authenticate( string email = "", string password = "", string token = "" ){

		var user = new com.database.BaseModelObject( table = "customers" );

		// If a token was passed in, try to load the user associated with it.
		if( len( trim( token ) ) && token != "null" ){
			user.loadByDeviceToken( token );
		}else if( len( trim( email ) ) && len( trim( password ) ) ){
			user.loadByEmailAndPassword( email, hash( password ) );
		}

		// User either didn't exist at all, or the authentication token was bad
		if( user.isNew() ){
			return { "message" = "Sorry, but your Username/Password was not found.  Please check it and try again.", "isLoggedIn" = false, "status" = "401" };
		}

		// If we made it this far, the user was authenticated.  Now we need to return the user object to the client.

		// NOTE:
		// This api can be accessed via web app OR via cordova/phonegap app.  The later does not support cookies so
		// we cannot rely on a CF session to retain the user's session state.  Instead we will need to re-authenticate
		// each request and return the user object that can then be stored in localStorage on the client.

		user["fullName"] = user.getFirst_Name() & " " & user.getLast_Name();
		user["isLoggedIn"] = true;
		user["status"] = 200;
		user["message"] = "Welcome #user.FullName#!";
		user["role"] = this.getUserRoles()['user'];

		return user;

	}
	public function logout( user ){
		// deactivate device token (will require username/password on next login)
		user.setDevice_token( '' );
		user.save();
	}


}