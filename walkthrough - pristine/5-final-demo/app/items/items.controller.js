(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'ItemsController', ItemsController );

	ItemsController.$inject = [ '$q', '$stateParams', 'itemService' ];

	function ItemsController( $q, $stateParams, itemService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports.
		vm.items = [];

		//Activate the view (basically call all the services and log it)
		activate();

		function activate(){
			// promises should be an array of function calls i.e. [getItems(),getPreferences()]
			var promises = [ getItems() ];

			return $q.all( promises )
				.then( function(){
					console.log( 'Items View Loaded' );
				}
			);
		}

		function getItems(){
			// Return all items
			return itemService.getItems().then( function( response ){
				vm.items = response.data;
			} );
		}

	}
})();

