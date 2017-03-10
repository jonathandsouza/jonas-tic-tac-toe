'use strict';

(function() {

	angular.module('ttt.pages.play', [
		'ttt.modules.game'
	])

		.controller('PlayController', function() {

		})

		.controller('GameController', function(gameCoordinator) {


		})

		.controller('PlayersController', function(gameCoordinator) {

			var $ctrl = this;

			//list of Players
			$ctrl.players = [];

			gameCoordinator.game.getPlayers().then(function(players) {
				$ctrl.players = players;
			});

			$ctrl.challenge = function(challenged) {
				console.log(challenged + ' Has been challenged');
			}
		})

		.component('playerList', {

			templateUrl: '../../assets/views/pages/play/player-list.html',

			controller: function() {
				console.log('here');
			},

			bindings: {
				players: '<',
				onChallenge: '&'
			}
		});


})();

