(function(){
	'use strict';

	angular.module( 'app.services.item', [] )
		.factory( 'itemService', itemService );

	itemService.$inject = [ '$http' ];

	function itemService( $http ){
		return {
			getItem: getItem,
			getItems: getItems

		};

		//////////////////////////////
		// Implementation details
		//////////////////////////////
		function getItems(){
			return $http.get( 'http://devobjective.local/api/index.cfm/items' );
		}

		function getItem( itemId ){
			return $http.get( 'http://devobjective.local/api/index.cfm/items/item/' + itemId );
		}
	}
})();
