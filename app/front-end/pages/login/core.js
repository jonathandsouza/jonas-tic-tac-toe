'use strict';

(function() {

	angular.module('ttt.pages.login', [])

		.controller('LoginController', function(login, $state, gameCoordinator) {

			// initialize login modal
			var config = login.init();

			// register subscribers to the login event;
			config
				.events
				.login
				.subscribe(function(loginName) {

					//close login modal
					config.modal.instance.close();

					// INITIALIZE GAME COORDINATOR
					gameCoordinator.init({loginName});

					//route to main game page.
					$state.go('main.play');
				});
		})

		.factory('login', function($uibModal) {

			return {

				init: function() {
					var _config = {

						events: {
							login: new Rx.Subject()
						},

						modal: {
							instance: null
						}
					};

					_config.modal.instance = $uibModal.open({
						templateUrl: 'loginModal.html',
						controller: function() {
							this.login = function(loginName) {
								if (loginName && loginName.trim())
									_config.events.login.onNext(loginName);
							}
						},
						controllerAs: '$ctrl',
						size: 'lg',
						backdrop: 'static',
						keyboard: false
					});


					return _config;
				}
			}

		})

})();

