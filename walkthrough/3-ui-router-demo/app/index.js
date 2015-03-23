(function() {
	"use strict"

	angular.module( 'app', [ 'ui.router' ] )
		.config( function( $stateProvider, $urlRouterProvider ) {

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
				} );

			//Default state
			$urlRouterProvider.otherwise( '/home' );
		} );

}());
