(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app.dataservice', [] )
		.factory( 'dataService', dataService );
	//Inject dependencies
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
