(function(){
	"use strict"

	angular.module( 'app', [ 'ui.router' ] )
		.config( function( $stateProvider, $urlRouterProvider ){
			//Default state
			$urlRouterProvider.otherwise( '/home' );

			$stateProvider

				.state( 'home', {
					url: '/home',
					templateUrl: 'home/home.html',
					controller: 'MainController',
					controllerAs: 'vm'
				} )

				.state( 'items', {
					url: '/items',
					templateUrl: 'items/items.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				} );

		} );
	;

}());
