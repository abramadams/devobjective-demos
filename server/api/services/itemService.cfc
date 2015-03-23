component {
    /**
    * I return a list of items
    **/
    public function getItems() {

        var items = new com.database.BaseModelObject( table="items" );

        return items.listAsArray();

    }

    /**
    * I return a single item
    **/
    public function getItem( itemId ) {

        var item = new com.database.BaseModelObject( table="items" ).loadByLinkId( itemId );

        return item.toStruct();

    }
}
