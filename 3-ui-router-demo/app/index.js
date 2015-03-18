(function(){
	"use strict"

	angular.module( 'app', [ 'ui.router' ] )
		.config( function( $stateProvider, $urlRouterProvider ){
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
				} );

		} );

}());
