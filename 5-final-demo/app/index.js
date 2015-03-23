(function(){
	"use strict"

	angular.module( 'app', [
		/* Angular & 3rd Party modules */
		'ui.router',
		'ui.bootstrap',
		'angularLocalStorage',
		'ngSanitize',
		'angularPayments',
		/* app specific modules */
		'app.widgets',
		'app.services.item',
		'app.services.cart'

	] )
		.config( [ '$stateProvider', '$urlRouterProvider',
	             function( $stateProvider, $urlRouterProvider ){

		             //Default state
		             $urlRouterProvider.otherwise( '/home' );

		             $stateProvider

			             .state( 'home', {
				             url: '/home',
				             templateUrl: 'app/home/home.html',
				             controller: 'HomeController',
				             controllerAs: 'vm'
			             } )
			             .state( 'items', {
				             url: '/items',
				             templateUrl: 'app/items/items.html',
				             controller: 'ItemsController',
				             controllerAs: 'vm'
			             } )
			             .state( 'item', {
				             url: '/item/:id',
				             templateUrl: 'app/items/item.html',
				             controller: 'ItemsController',
				             controllerAs: 'vm'
			             } )
			             .state( 'cart', {
				             url: '/cart',
				             templateUrl: 'app/cart/cart.html',
				             controller: 'CartController',
				             controllerAs: 'vm'
			             } )
			             // Checkout states (uses nested states)
			             .state( 'checkout', {
				             url: '/checkout',
				             abstract: true,
				             templateUrl: 'app/checkout/checkout.html',
				             controller: 'CheckoutController',
				             controllerAs: 'vm'
			             } )
			             .state( 'checkout.profile', {
				             url: '',
				             templateUrl: 'app/checkout/checkout.profile.html'
			             } )
			             .state( 'checkout.address', {
				             url: '/address',
				             templateUrl: 'app/checkout/checkout.address.html'
			             } )
			             .state( 'checkout.payment', {
				             url: '/payment',
				             templateUrl: 'app/checkout/checkout.payment.html'
			             } )
			             .state( 'checkout.confirmation', {
				             url: '/confirmation',
				             templateUrl: 'app/checkout/checkout.confirmation.html'
			             } );

	             } ] )
		.run( [ '$rootScope', '$state', '$stateParams', 'cartService',
	          function( $rootScope, $state, $stateParams, cartService ){
		          //simple toggle for mobile nav
		          $rootScope.isCollapsed = true;

		          //add cart count to navigation badge
		          $rootScope.cartCount = function(){ return cartService.totalItems() };

	          } ] );

}());
