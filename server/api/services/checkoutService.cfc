component accessors="true" {
	property name="dao" type="Dao";

	public function init( required string stripeGatewayBaseUrl, required string stripeSecretKey ){
		variables.dao = application.dao;
		return this;
	}



	public function processOrder( required struct customer, required struct cart ){
		// Fake payment gateway... would send request to process payment and if successful
		// record the payment and return success to user.

		var customerData = {
			"first_name": customer.firstName,
			"last_name": customer.lastName,
			"address1": customer.addressLine1,
			"address2": customer.addressLine2,
			"city": customer.addressCity,
			"state": customer.addressState,
			"zip": customer.addressZip,
			"phone": customer.phone,
			"email": customer.email
		};

		var customer = new com.database.BaseModelObject( table = "customers" );
		customer.loadByEmail( customer.email );
		if( customer.isNew() ){
			customer.populate( customerData ).save();
		}
		var orderNo = listGetAt( createUUID(), 2, '-' );
		var order = new com.database.BaseModelObject( table = "orders" );

		order.populate({
			"customer_Id": customer.getId(),
			"order_number": orderNo,
			"order_date": now(),
			"total": cart.cartTotal,
			"payment_status": 1,
			"payment_method": cart.payment_method,
			"payment_date": now()
		}).save();

		for( var item in cart.items ){
			var orderItem = new com.database.BaseModelObject( table = "order_items" );
			orderItem.populate({
				"orders_Id": order.getId(),
				"items_Id": item.id,
				"price": item.price,
				"quantity": item.quantity,
				"subtotal": item.price * item.quantity
			}).save();
		}

		return {
			status: "success",
			items: cart,
			total: cart.cartTotal,
			customer: customerData
		};

	}
}