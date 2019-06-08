'use strict';

var _PrisonersDilemma = require('./PrisonersDilemma');

var _PrisonersDilemma2 = _interopRequireDefault(_PrisonersDilemma);

var _TitForTat = require('./strategies/TitForTat');

var _TitForTat2 = _interopRequireDefault(_TitForTat);

var _TitForTwoTats = require('./strategies/TitForTwoTats');

var _TitForTwoTats2 = _interopRequireDefault(_TitForTwoTats);

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

var _AlternateBetray = require('./strategies/AlternateBetray');

var _AlternateBetray2 = _interopRequireDefault(_AlternateBetray);

var _NaiveProber = require('./strategies/NaiveProber');

var _NaiveProber2 = _interopRequireDefault(_NaiveProber);

var _RemorsefulProber = require('./strategies/RemorsefulProber');

var _RemorsefulProber2 = _interopRequireDefault(_RemorsefulProber);

var _PeriodicBetray = require('./strategies/PeriodicBetray');

var _PeriodicBetray2 = _interopRequireDefault(_PeriodicBetray);

var _PeriodicCooperate = require('./strategies/PeriodicCooperate');

var _PeriodicCooperate2 = _interopRequireDefault(_PeriodicCooperate);

var _SoftMajority = require('./strategies/SoftMajority');

var _SoftMajority2 = _interopRequireDefault(_SoftMajority);

var _HardMajority = require('./strategies/HardMajority');

var _HardMajority2 = _interopRequireDefault(_HardMajority);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prisonersDilemma = new _PrisonersDilemma2.default();

var titForTat = new _TitForTat2.default();
var titForTwoTats = new _TitForTwoTats2.default();
var suspiciousTitForTat = new _SuspiciousTitForTat2.default();
var hardTitForTat = new _HardTitForTat2.default();
var pavlov = new _Pavlov2.default();
var spiteful = new _Spiteful2.default();
var randomChoice = new _RandomChoice2.default();
var alwaysBetray = new _AlwaysBetray2.default();
var alwaysCooperate = new _AlwaysCooperate2.default();
var alternateBetray = new _AlternateBetray2.default();
var naiveProber = new _NaiveProber2.default();
var remorsefulProber = new _RemorsefulProber2.default();
var periodicBetray = new _PeriodicBetray2.default();
var periodicCooperate = new _PeriodicCooperate2.default();
var softMajority = new _SoftMajority2.default();
var hardMajority = new _HardMajority2.default();

var players = [titForTat, titForTwoTats, suspiciousTitForTat, hardTitForTat, pavlov, spiteful, randomChoice, alwaysBetray, alwaysCooperate, alternateBetray, naiveProber, remorsefulProber, periodicBetray, periodicCooperate, softMajority, hardMajority];

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