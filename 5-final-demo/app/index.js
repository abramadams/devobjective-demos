(function(){
	"use strict"

	angular.module( 'app', [
		/* Angular & 3rd Party modules */
		'ui.router',
		'angularLocalStorage',
		'ngSanitize',
		'angularPayments',
		/* app specific modules */
		'app.constants',
		'app.widgets',
		'app.services.item',
		'app.services.cart',
		'app.services.device',
		'app.services.auth'
	] )
		.config( [ '$stateProvider', '$urlRouterProvider', 'constants',
	               function( $stateProvider, $urlRouterProvider, constants ){

		               var userRoles = constants.USER_ROLES;
		               var accessLevels = constants.ACCESS_LEVELS;

		               //Default state
		               $urlRouterProvider.otherwise( '/home' );

		               $stateProvider

			               .state( 'home', {
				               url: '/home',
				               templateUrl: 'app/home/home.html',
				               controller: 'MainController',
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
			               } );

	               } ] )
		.run( [ '$rootScope', '$state', '$stateParams', 'CartService',
	            function( $rootScope, $state, $stateParams, CartService ){
		            //this solves page refresh and getting back to state

		            //Load cart
		            CartService.init( 'devObjectiveDemo' );

	            } ] );

}());
