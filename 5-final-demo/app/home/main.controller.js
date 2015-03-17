(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'MainController', MainController );

	//Injects dependencies (since controller not registered with IIFE)
	MainController.$inject = [ '$q', 'ItemService' ];

	function MainController( $q, ItemService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports
		vm.title = "Precious Collectibles";
		vm.tagline = "One Page to Rule them All";

		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

		//Activate the view (basically call all the services and log it)
		activate();

		function activate(){
			// promises should be an array of function calls i.e. [getItems(),getPreferences()]
			var promises = [ getRandomItems() ];

			return $q.all( promises )
				.then( function(){
					console.log( 'Home View Loaded' );
				}
			);
		}

		function getRandomItems(){
			//Should be pulling this from a service
			var items = [];
			ItemService.getItems()
				.then( function( response ){
					items = response.data;
					items.map( function( item ){
						item.rank = Math.random();
					} );
					vm.items = items;

				} );
		}

	}
})();
