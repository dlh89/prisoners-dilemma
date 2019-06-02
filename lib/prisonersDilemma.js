'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = require('./Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrisonersDilemma = function () {
  function PrisonersDilemma() {
    _classCallCheck(this, PrisonersDilemma);

    this.iterations = 200;
  }

  /**
    * player betrays and opponent doesnt: 0
    * both betray: -2
    * player stays silent and opponent betrays: -3
    * @param {bool} playerBetray
    * @param {bool} opponentBetray
    */


  _createClass(PrisonersDilemma, [{
    key: 'calcResult',
    value: function calcResult(playerBetray, opponentBetray) {
      if (playerBetray) {
        if (opponentBetray) {
          return -2;
        }
        // opponent stayed silent
        return 0;
      }
      // player stayed silent
      if (opponentBetray) {
        return -3;
      }
      // both stayed silent
      return -1;
    }
  }, {
    key: 'simulateGame',
    value: function simulateGame(playerOne, playerTwo) {
      var _this = this;

      // setup
      var players = [playerOne, playerTwo];
      players.forEach(function (player) {
        var opponent = players.filter(function (filterPlayer) {
          return filterPlayer !== player;
        })[0];
        if (!opponent) {
          // playing against themselves
          opponent = player;
        }
        var game = new _Game2.default();
        player.games.push(game);
        player.opponentsFaced.push(opponent.name);
      });

      var _loop = function _loop(i) {
        // play moves for this round
        players.forEach(function (player, index) {
          var opponent = players.filter(function (filterPlayer) {
            return filterPlayer !== player;
          })[0];
          if (!opponent) {
            // playing against themselves
            opponent = player;
          }
          // TODO avoid duplicating history when players face themselves
          if (opponent === player) {
            if (index === 0) {
              player.games[player.games.length - 1].history.push(player.play(i));
              player.games[player.games.length - 1].opponentHistory.push(opponent.play(i));
            }
          } else {
            player.games[player.games.length - 1].history.push(player.play(i));
            player.games[player.games.length - 1].opponentHistory.push(opponent.play(i));
          }
        });

        // update player objects
        players.forEach(function (player, index) {
          var opponent = players.filter(function (filterPlayer) {
            return filterPlayer !== player;
          })[0];
          if (!opponent) {
            // playing against themselves
            opponent = player;
          }
          var playerBetray = player.games[player.games.length - 1].history[i];
          var opponentBetray = opponent.games[opponent.games.length - 1].history[i];
          if (opponent === player) {
            if (index === 0) {
              player.score += _this.calcResult(playerBetray, opponentBetray);
              player.games[player.games.length - 1].score += _this.calcResult(playerBetray, opponentBetray);
            }
          } else {
            player.score += _this.calcResult(playerBetray, opponentBetray);
            player.games[player.games.length - 1].score += _this.calcResult(playerBetray, opponentBetray);
          }
        });
      };

      for (var i = 0; i < this.iterations; i++) {
        _loop(i);
      }
      console.log(playerOne.name + ': ' + playerOne.games[playerOne.games.length - 1].score + ' | ' + playerTwo.name + ': ' + playerTwo.games[playerTwo.games.length - 1].score);
    }
  }]);

  return PrisonersDilemma;
}();

exports.default = PrisonersDilemma;