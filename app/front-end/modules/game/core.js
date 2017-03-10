'use strict';

(function() {

	angular.module('ttt.modules.game', [
		'ttt.modules.game.gameCoordinator',
		'ttt.modules.game.api'
	])


		.constant('EVENTS', {
			CONNECTION: {

				CONNECT: 'connection',

				DISCONNECT: 'disconnect',
			},

			USER: {
				INIT: 'USER_INITIALIZE'
			},

			GAME: {

				SEND: 'CHAT_SEND',

				RECEIVE: 'CHAT_RECEIVE',

				TYPING: 'CHAT_TYPING',

				USER_JOINED: 'CHAT_USER_JOINED',

				USER_LEFT: 'CHAT_USER_LEFT',

			}

		})


})();