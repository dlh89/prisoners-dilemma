"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: "calcResult",
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
    key: "pushHistory",
    value: function pushHistory(player, selfBetray, opponentBetray) {
      if (player.opponentHistory) {
        player.opponentHistory.push(opponentBetray);
      }
      if (player.history) {
        player.history.push(selfBetray);
      }
    }
  }, {
    key: "simulateGame",
    value: function simulateGame(playerOne, playerTwo) {
      for (var i = 0; i < this.iterations; i++) {
        var playerOneBetray = playerOne.play(i);
        var playerTwoBetray = playerTwo.play(i);
        // console.log(`${playerOne.name} betray: ${playerOneBetray}`);
        // console.log(`${playerTwo.name} betray: ${playerTwoBetray}`);
        // console.log("...");

        playerOne.score += this.calcResult(playerOneBetray, playerTwoBetray);
        playerTwo.score += this.calcResult(playerTwoBetray, playerOneBetray);

        this.pushHistory(playerOne, playerOneBetray, playerTwoBetray);

        // avoid duplicating history when players face themself
        if (playerOne !== playerTwo) {
          this.pushHistory(playerTwo, playerTwoBetray, playerOneBetray);
        }
      }
      playerOne.opponentsFaced.push(playerTwo.name);
      // avoid duplicating opponents faced when players face themself
      if (playerOne !== playerTwo) {
        playerTwo.opponentsFaced.push(playerOne.name);
      }
    }
  }]);

  return PrisonersDilemma;
}();

exports.default = PrisonersDilemma;