(function(){
	'use strict';

	angular
		.module( 'app.services.item', [] )
		.factory( 'ItemService', ItemService );

	ItemService.$inject = [ '$q', '$http' ];

	function ItemService( $q, $http ){
		return {
			getItem: getItem,
			getItems: getItems

		};

		//////////////////////////////
		// Implementation details
		//////////////////////////////
		function getItems(){
			return $http.get( 'data/items.json' )
		}

		function getItem( itemId ){
			var items = getItems().then( function( response ){
				return response.data.filter( function( item ){
					return item.linkId == itemId;
				} );
			} );

			return $q.when( items );
		}
	}
})();
