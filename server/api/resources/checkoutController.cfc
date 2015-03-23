component extends="taffy.core.resource" taffy_uri="/checkout" {

    function post( cart, customer ) {

    	var checkoutSvc = new services.checkoutService();
	    var payment = checkoutSvc.processOrder( customer = customer, cart = cart );

		// if payment successful, send the a-ok
		if( ( payment.status == "success" ) ){
			return representationOf( { "status" : "success", "message" : "Payment Successful" } );
		}else{
			// otherwise send a fail message
			return representationOf( { "status" : "fail", "message" : payment.message } );
		}

    }

}
