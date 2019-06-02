'use strict';

var _PrisonersDilemma = require('./PrisonersDilemma');

var _PrisonersDilemma2 = _interopRequireDefault(_PrisonersDilemma);

var _TitForTat = require('./strategies/TitForTat');

var _TitForTat2 = _interopRequireDefault(_TitForTat);

var _SuspiciousTitForTat = require('./strategies/SuspiciousTitForTat');

var _SuspiciousTitForTat2 = _interopRequireDefault(_SuspiciousTitForTat);

var _HardTitForTat = require('./strategies/HardTitForTat');

var _HardTitForTat2 = _interopRequireDefault(_HardTitForTat);

var _Pavlov = require('./strategies/Pavlov');

var _Pavlov2 = _interopRequireDefault(_Pavlov);

var _Spiteful = require('./strategies/Spiteful');

var _Spiteful2 = _interopRequireDefault(_Spiteful);

var _RandomChoice = require('./strategies/RandomChoice');

var _RandomChoice2 = _interopRequireDefault(_RandomChoice);

var _AlwaysBetray = require('./strategies/AlwaysBetray');

var _AlwaysBetray2 = _interopRequireDefault(_AlwaysBetray);

var _AlwaysCooperate = require('./strategies/AlwaysCooperate');

var _AlwaysCooperate2 = _interopRequireDefault(_AlwaysCooperate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prisonersDilemma = new _PrisonersDilemma2.default();

var titForTat = new _TitForTat2.default();
var suspiciousTitForTat = new _SuspiciousTitForTat2.default();
var hardTitForTat = new _HardTitForTat2.default();
var pavlov = new _Pavlov2.default();
var spiteful = new _Spiteful2.default();
var randomChoice = new _RandomChoice2.default();
var alwaysBetray = new _AlwaysBetray2.default();
var alwaysCooperate = new _AlwaysCooperate2.default();

var players = [titForTat, suspiciousTitForTat, hardTitForTat, pavlov, spiteful, randomChoice, alwaysBetray, alwaysCooperate];

players.forEach(function (player) {
  // play against every player they haven't already faced (including themselves)
  players.forEach(function (opponent) {
    // ignore opponents already faced
    // TODO convert to arr filter
    if (!player.opponentsFaced.includes(opponent.name)) {
      prisonersDilemma.simulateGame(player, opponent);
    }
  });
});

var sortedPlayers = players.sort(function (a, b) {
  return b.score - a.score;
});

sortedPlayers.forEach(function (player, i) {
  console.log(i + 1 + ' | ' + player.name + ' (' + player.score + ')');
});