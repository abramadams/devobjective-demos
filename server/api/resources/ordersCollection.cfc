component extends = "taffy.core.resource" taffy_uri = "/orders/history" {

    function get() {

		var order = new com.database.BaseModelObject( table = "orders", autowire = true );
		order.hasMany("order_items");

		var orders = order.listAsArray( where: "where customers_Id = #user.Id#" );

		return representationOf( orders );

    }

}
