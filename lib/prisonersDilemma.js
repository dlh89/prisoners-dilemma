'use strict';

var _TitForTat = require('./strategies/TitForTat');

var _TitForTat2 = _interopRequireDefault(_TitForTat);

var _RandomChoice = require('./strategies/RandomChoice');

var _RandomChoice2 = _interopRequireDefault(_RandomChoice);

var _AlwaysBetray = require('./strategies/AlwaysBetray');

var _AlwaysBetray2 = _interopRequireDefault(_AlwaysBetray);

var _AlwaysCooperate = require('./strategies/AlwaysCooperate');

var _AlwaysCooperate2 = _interopRequireDefault(_AlwaysCooperate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITERATIONS = 5;

/**
  * player betrays and opponent doesnt: 0
  * both betray: -2
  * player stays silent and opponent betrays: -3
  * @param {bool} playerBetray
  * @param {bool} opponentBetray
  */
function calcResult(playerBetray, opponentBetray) {
  if (playerBetray) {
    if (opponentBetray) {
      return -2;
    }
    // pTwo stayed silent
    return 0;
  }
  // pOne stayed silent
  if (opponentBetray) {
    return -3;
  }
  // both stayed silent
  return -1;
}

function pushHistory(player, opponentBetray) {
  if (player.opponentHistory) {
    player.opponentHistory.push(opponentBetray);
  }
}

function simulateGame(playerOne, playerTwo) {
  var playerOneScore = 0;
  var playerTwoScore = 0;

  for (var i = 0; i < ITERATIONS; i++) {
    var playerOneBetray = playerOne.play(i);
    console.log(playerOne.name + ' betray: ' + playerOneBetray);
    var playerTwoBetray = playerTwo.play(i);
    console.log(playerTwo.name + ' betray: ' + playerTwoBetray);
    console.log("...");

    playerOneScore += calcResult(playerOneBetray, playerTwoBetray);
    playerTwoScore += calcResult(playerTwoBetray, playerOneBetray);

    pushHistory(playerOne, playerTwoBetray);
    pushHistory(playerTwo, playerOneBetray);
  }

  console.log(playerOne.name + ' opponent history: ' + playerOne.opponentHistory);
  console.log(playerOne.name + ' score: ' + playerOneScore);
  console.log(playerTwo.name + ' score: ' + playerTwoScore);
}

var titForTat = new _TitForTat2.default();
var randomChoice = new _RandomChoice2.default();
var alwaysBetray = new _AlwaysBetray2.default();
var alwaysCooperate = new _AlwaysCooperate2.default();

simulateGame(titForTat, randomChoice);