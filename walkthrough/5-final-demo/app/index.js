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
		'app.constants',
		'app.widgets',
		'app.services.cart',
		'app.services.item'

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
			             } ).state( 'item', {
				             url: '/item/:id',
				             templateUrl: 'app/items/item.html',
				             controller: 'ItemsController',
				             controllerAs: 'vm'
			             } ).state( 'cart', {
				             url: '/cart',
				             templateUrl: 'app/cart/cart.html',
				             controller: 'CartController',
				             controllerAs: 'vm'
			             } );

	             } ] )
		.run( [ '$rootScope', 'cartService',
	          function( $rootScope, cartService ){
		          //simple toggle for mobile nav
		          $rootScope.isCollapsed = true;

		          //add cart count to navigation badge
		          $rootScope.cartCount = function(){ return cartService.totalItems() };

	          } ] );

}());
