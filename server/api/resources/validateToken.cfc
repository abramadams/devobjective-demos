component extends="taffy.core.resource" taffy_uri="/validateToken"{


	function post( token, eventKey ){
		writeDump(application);abort;

		if( application.auth.verifyToken( token ) ){

			return representationOf( session.user ).withStatus( session.user.status );

		}else{
			return representationOf( { "error" : "You do not have permission to this resource" } ).withStatus(200);
		}
	}

	// function get(){
	// 	// var checkoutSvc = new services.checkoutService( stripeGatewayBaseUrl = application.stripeBaseApiUrl, stripeSecretKey = application.stripeSecretKey );
	// 	// writeDump(checkoutSvc);
	// 	try{
	// 		var st = new stripe.Stripe( gatewayBaseUrl = application.stripeBaseApiUrl, secretKey = application.stripeSecretKey );
	// 		return representationOf([st,application.stripeSecretKey]);
	// 	}catch(any e){
	// 		return representationOf(e);

	// 	}
	// }

}