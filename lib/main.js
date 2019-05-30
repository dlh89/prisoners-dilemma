'use strict';

var _PrisonersDilemma = require('./PrisonersDilemma');

var _PrisonersDilemma2 = _interopRequireDefault(_PrisonersDilemma);

var _TitForTat = require('./strategies/TitForTat');

var _TitForTat2 = _interopRequireDefault(_TitForTat);

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

var titForTat = new _TitForTat2.default('Tit for Tat');
var hardTitForTat = new _HardTitForTat2.default('Hard Tit for Tat');
var pavlov = new _Pavlov2.default('Pavlov');
var spiteful = new _Spiteful2.default('Spiteful');
var randomChoice = new _RandomChoice2.default('Random Choice');
var alwaysBetray = new _AlwaysBetray2.default('Always Betray');
var alwaysCooperate = new _AlwaysCooperate2.default('Always Cooperate');

var players = [titForTat, hardTitForTat, pavlov, spiteful, randomChoice, alwaysBetray, alwaysCooperate];

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

players.forEach(function (player) {
  console.log(player.name + ' score: ' + player.score);
});