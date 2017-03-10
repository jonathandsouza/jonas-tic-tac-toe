'use strict';

(function() {

	angular.module('ttt.modules.game.gameCoordinator', [])

		.factory('gameCoordinator', function(socket, EVENTS, $q) {

			var _internal = {
				isInit: false,
				profile: null,
				events: null
			};

			return {

				init: function(config) {

					_internal.profile = {loginName: config.loginName};
					_internal.events = EVENTS;
					_internal.isInit = true;

					socket.init({EVENTS: _internal.events}, _internal.profile.loginName, _internal.profile);

				},

				game: {
					getPlayers: function() {
						return $q.when(['Tom', 'Dick', 'Harry']);
					}
				}

			}

		});
})();