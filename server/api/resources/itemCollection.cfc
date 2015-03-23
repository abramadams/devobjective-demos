component extends = "taffy.core.resource" taffy_uri = "/items/" {

    function get(eventKey) {

        var itemSvc = new services.itemService();

        return representationOf( itemSvc.getItems() );

    }

}
