(function(){
	'use strict';

	angular.module( 'app.services.item', [] )
		.factory( 'itemService', itemService );

	itemService.$inject = [ '$http' ];

	function itemService( $http ){

		var baseUrl = 'http://devobjective.demo/api/index.cfm';

		return {
			getItem: getItem,
			getItems: getItems

		};

		//////////////////////////////
		// Implementation details
		//////////////////////////////
		function getItems(){
			return $http.get( baseUrl + '/items' );
		}

		function getItem( itemId ){
			return $http.get( baseUrl + '/items/item/' + itemId );
		}
	}
})();
