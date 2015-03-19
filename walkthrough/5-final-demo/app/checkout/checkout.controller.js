(function(){
	'use strict';

	//Registers controller with "app"
	angular.module( 'app' )
		.controller( 'CheckoutController', CheckoutController );

	CheckoutController.$inject = [ '$q', '$state', 'cartService' ];

	function CheckoutController( $q, $state, cartService ){
		// hang all "$scope" type stuff off of vm (view model)
		var vm = this;

		// Exports.
		vm.cart = [];
		vm.order = vm.order || [];
		vm.states = [];
		vm.checkoutForm = {};
		vm.cartTotal = parseFloat( cartService.cartTotal() );

		vm.checkout = checkout;
		vm.canSubmit = canSubmit;

		//Activate the view (basically call all the services and log it)
		activate();

		function activate(){
			// promises should be an array of function calls i.e. [getBulls(),getPreferences()]
			var promises = [ getCart(), getStates() ];

			return $q.all( promises )
				.then( function(){
					console.log( 'Checkout View Loaded' );
				}
			);
		}

		function getCart(){
			vm.cart = cartService.getCart();
		}

		function getStates(){
			vm.states = cartService.getStates();
		}

		function canSubmit(){
			return vm.checkoutForm.$valid;
		}

		function checkout(){
			var order = cartService.checkout();
			vm.order = [];
			if( order.status && order.status == "success" ){
				vm.cart = [];

				order.customer = {
					firstName: vm.checkoutForm.firstName || "",
					lastName: vm.checkoutForm.lastName || "",
					addressLine1: vm.checkoutForm.addressLine1 || "",
					addressLine2: vm.checkoutForm.addressLine2 || "",
					city: vm.checkoutForm.addressCity || "",
					state: vm.checkoutForm.addressState || "",
					zip: vm.checkoutForm.addressZip || "",
					phone: vm.checkoutForm.phone || "",
					email: vm.checkoutForm.email || ""
				};

				vm.order = order;

				$state.go( 'checkout.confirmation' );
			}
		}
	}
})();
