(function(){
	'use strict';

	//Creates a new module 'app.dataservice' and registers a factory/service
	angular.module( 'app.dataservice', [] )
		.factory( 'dataService', dataService );

	//Inject dependencies
	dataService.$inject = [ '$http' ];

	function dataService( $http ){


		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

	}
})();
