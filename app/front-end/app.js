'use strict';

(function() {

	angular.module('ttt', [

		// 3rd Party dependencies
		'ui.router',
		'ui.bootstrap',

		//Custom Code :
		'ttt.modules',
		'ttt.pages'
	])

	// Routing
		.config(function($urlRouterProvider, $stateProvider) {

			// State for login
			$stateProvider.state('login', {
				url: '/login',
				controller: 'LoginController',
				templateUrl: 'assets/views/pages/login/login.html'
			});

			// Main Page of application
			$stateProvider

				.state('main', {
					controller: 'PlayController',
					controllerAs: '$ctrl',
					url: '/',
					templateUrl: 'assets/views/pages/play/main.html',
				})

				.state('main.play', {
					url: 'play',
					views: {

						//list of Players
						players: {
							controller: 'PlayersController',
							controllerAs: '$ctrl',
							templateUrl: 'assets/views/pages/play/players.html'
						},

						game: {
							controller: 'GameController',
							controllerAs: '$ctrl',
							templateUrl: 'assets/views/pages/play/game.html',
						}
					}
				});

			$urlRouterProvider
				.otherwise('/login');
		})


})();
