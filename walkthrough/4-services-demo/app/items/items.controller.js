(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'ItemsController', ItemsController );

	//Inject dependencies
	ItemsController.$inject = [ '$q', 'dataService' ];

	function ItemsController( $q, dataService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports
		vm.items = [];
		vm.addItem = addItem;
		vm.removeItem = removeItem;
		vm.reloadItems = getItems;

		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

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
			dataService.getItems()
				.then( function( response ){
					vm.items = response.data;
				} );
		}

		function addItem(){
			if( vm.name && vm.name.length > 0 ){
				vm.items.push( { name: vm.name } );
			}
			vm.name = "";
		}

		function removeItem( index ){
			vm.items.splice( index, 1 );
		}

	}
})();
