component extends="taffy.core.api"{
	this.name = hash(getBaseTemplatePath());
	this.sessionManagement = false;
	this.mappings['/com'] = expandPath( '/com/' );
	this.mappings['/stripe'] = expandPath( '/com/stripe' );
	this.mappings['/services'] = expandPath( './services' );
	this.datasource = "devobjective";

	getPageContext().getResponse().addHeader("Access-Control-Allow-Origin","*");
 	getPageContext().getResponse().addHeader("Access-Control-Allow-Headers","Origin, Authorization, X-CSRF-Token, X-Requested-With, Content-Type, X-HTTP-Method-Override, Accept, Referrer, User-Agent");
 	getPageContext().getResponse().addHeader("Access-Control-Allow-Methods","GET, UPDATE, POST, PUT, PATCH, DELETE, OPTIONS");


	variables.framework = {
		reloadKey = "reload",
		reloadPassword = "12345",
		disableDashboard = false, // set to true for production
		disabledDashboardRedirect = "/",
		debugKey = "debugonly"

	};

	public function onApplicationStart(){
		super.onApplicationStart();

		application.dao = new com.database.dao();
		application.auth = new services.authService();

	}

	function onTaffyRequest(verb, cfc, requestArguments, mimeExt, headers){
		if( structKeyExists( arguments.headers, 'authorization') ){
			 requestArguments['deviceToken'] =  listRest( headers[ 'authorization' ], ' ' );
		}

		// whitelist endpoints that don't require authentication
		if( cfc == "loginController"
			|| cfc == "logoutController"
			|| cfc == "itemCollection"
			|| cfc == "itemMember"
			|| cfc == "checkoutController" ){
			return true;
		}
		// Checks to see if the user is logged in.
		//otherwise require a device token
        if( !structKeyExists( requestArguments, "deviceToken" ) ){

            return noData().withStatus( 401, "Not Authenticated" );

        }

        // grab user metadata using token
        var userMetadata = application.auth.authenticate( token = requestArguments.deviceToken );
        requestArguments['user'] = userMetadata;
	    return representationOf( userMetadata )
	    		.withStatus( userMetadata.status );

		// return true;


	}


}