(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'ItemsController', ItemsController );

	ItemsController.$inject = [ '$q', '$stateParams', 'itemService', 'cartService' ];

	function ItemsController( $q, $stateParams, itemService, cartService ){

		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports.
		vm.addButtonText = "Add to Cart";
		vm.addToCart = addToCart;

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
			var itemId = $stateParams.id;

			// Return single item
			if( itemId ){
				return itemService.getItem( itemId ).then( function( data ){

					// data returned from getItem is an array containing the item we requested
					vm.items = data.data;
					// set default quantity to 1
					vm.items.quantity = 1;

					// grab the index of the current item, if it exists
					vm.cartIndex = cartService.getItemIndex( vm.items.id );

					if( vm.cartIndex !== undefined ){
						//Item existed in cart
						var cartItem = cartService.getItem( vm.cartIndex );
						vm.items.quantity = cartItem.quantity;
						vm.addButtonText = "Update Cart";
					}

				} );
			}

			// Return all items
			return itemService.getItems().then( function( response ){
				vm.items = response.data;
			} );
		}

		function addToCart(){
			if( vm.cartIndex !== undefined ){
				cartService.updateQuantity( vm.cartIndex, parseInt( vm.items.quantity, 10 ) );
			}else{
				vm.cartIndex = cartService.addItem( vm.items, parseInt( vm.items.quantity, 10 ) );
			}
			vm.items = cartService.getItem( vm.cartIndex );
			vm.addButtonText = "Update Cart";

		}
	}
})();

