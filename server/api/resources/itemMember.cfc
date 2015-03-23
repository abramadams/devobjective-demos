component extends="taffy.core.resource" taffy_uri="/items/item/{itemId}"{


	function get(){

		var itemSvc = new services.itemService();

        return representationOf( itemSvc.getItem( itemId ) );
	}

}