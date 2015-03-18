(function(){
	'use strict';

	angular
		.module( 'app.services.item', [] )
		.factory( 'itemService', itemService );

	itemService.$inject = [ '$q', '$http' ];

	function itemService( $q, $http ){
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
