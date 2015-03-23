(function(){
	'use strict';

	//Creates a new module 'app.services.item' and registers a factory/service
	angular.module( 'app.services.item', [] )
		.factory( 'itemService', itemService );

	//Inject dependencies
	itemService.$inject = [ '$http' ];

	function itemService( $http ){

		return {
			getAwesomeThings: getAwesomeThings,
			getItems: getItems

		};

		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

		function getAwesomeThings(){
			return $http.get( 'data/awesomethings.json' )
		}

		function getItems(){
			return $http.get( 'data/items.json' )
		}

	}
})();
