(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'MainController', MainController );

	//Injects dependencies (since controller not registered with IIFE)
	MainController.$inject = [ '$q', 'dataService' ];

	function MainController( $q, dataService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports
		vm.title = "This is the home page";

		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

		//Activate the view (basically call all the services and log it)
		activate();

		function activate(){
			// promises should be an array of function calls i.e. [getItems(),getPreferences()]
			var promises = [ getAwesomeThings() ];

			return $q.all( promises )
				.then( function(){
					console.log( 'Home View Loaded' );
				}
			);
		}

		function getAwesomeThings(){
			//Should be pulling this from a service
			var awesomeThings = [];
			dataService.getAwesomeThings()
				.then( function( response ){
					awesomeThings = response.data;
					awesomeThings.map( function( awesomeThing ){
						awesomeThing.rank = Math.random();
					} );
					vm.awesomeThings = awesomeThings;

				} );
		}

	}
})();
