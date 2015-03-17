(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app.dataservice', [] )
		.factory( 'DataService', DataService );
	//Injects dependencies (since controller not registered with IIFE)
	DataService.$inject = [ '$http' ];

	function DataService( $http ){
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
