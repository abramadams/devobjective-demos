(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app.dataservice', [] )
		.factory( 'dataService', dataService );
	//Injects dependencies (since controller not registered with IIFE)
	dataService.$inject = [ '$http' ];

	function dataService( $http ){
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