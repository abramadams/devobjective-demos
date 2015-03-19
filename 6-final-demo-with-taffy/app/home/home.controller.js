(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'HomeController', HomeController );

	//Inject dependencies
	HomeController.$inject = [ '$q', 'itemService' ];

	function HomeController( $q, itemService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports
		vm.title = "Precious Collectibles".split( '' ); // split to array just for fun, and fire < would be a good
	                                                  // directive...
		vm.tagline = "One Page to rule them all, One Service to find them, One Controller to bring them all and in the darkness bind them";
		vm.getFireBurn = getFireBurn;

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
			itemService.getItems()
				.then( function( response ){
					items = response.data;
					items.map( function( item ){
						item.rank = Math.random();
					} );
					vm.items = items;

				} );
		}

		function getFireBurn( index ){
			return index % 2 ? 'burn' : 'fire';
		}

	}
})();
