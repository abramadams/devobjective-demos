(function(){
	'use strict';

	angular.module( 'app.services.item', [] )
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
			//Grab all items
			var items = getItems().then( function( response ){
				//now filter for the item with the given linkId
				return response.data.filter( function( item ){
					return item.linkId == itemId;
				} );
			} );

			// Return a promise
			return $q.when( items );
		}
	}
})();
