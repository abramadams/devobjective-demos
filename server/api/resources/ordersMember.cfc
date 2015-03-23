component extends = "taffy.core.resource" taffy_uri = "/orders/order/:orderNo" {

    function get( orderNo ) {

		var order = new com.database.BaseModelObject( table = "orders", autowire = true );
		order.loadByOrder_Number( orderNo );
		order.hasMany("order_items");

		return representationOf( order.toStruct() );

    }

}
