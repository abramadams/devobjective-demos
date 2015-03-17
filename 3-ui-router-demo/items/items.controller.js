(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'ItemsController', ItemsController );

	//Injects dependencies (since controller not registered with IIFE)
	ItemsController.$inject = [ '$q' ];

	function ItemsController( $q ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports
		vm.items = [
			{ name: "item 1" },
			{ name: "item 2" },
			{ name: "item 3" },
			{ name: "item 4" },
			{ name: "item 5" }
		];
		vm.addItem = addItem;
		vm.removeItem = removeItem;

		///////////////////////////////////////////////////////////////////
		// IMPLEMENTATION DETAILS
		///////////////////////////////////////////////////////////////////

		//Activate the view (basically call all the services and log it)
		activate();

		function activate(){
			// promises should be an array of function calls i.e. [getItems(),getPreferences()]
			var promises = [];

			return $q.all( promises )
				.then( function(){
					console.log( 'Items View Loaded' );
				}
			);
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
