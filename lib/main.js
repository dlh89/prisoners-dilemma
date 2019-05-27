'use strict';

var _PrisonersDilemma = require('./PrisonersDilemma');

var _PrisonersDilemma2 = _interopRequireDefault(_PrisonersDilemma);

var _TitForTat = require('./strategies/TitForTat');

var _TitForTat2 = _interopRequireDefault(_TitForTat);

var _RandomChoice = require('./strategies/RandomChoice');

var _RandomChoice2 = _interopRequireDefault(_RandomChoice);

var _AlwaysBetray = require('./strategies/AlwaysBetray');

var _AlwaysBetray2 = _interopRequireDefault(_AlwaysBetray);

var _AlwaysCooperate = require('./strategies/AlwaysCooperate');

var _AlwaysCooperate2 = _interopRequireDefault(_AlwaysCooperate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prisonersDilemma = new _PrisonersDilemma2.default();

var titForTat = new _TitForTat2.default();
var randomChoice = new _RandomChoice2.default();
var alwaysBetray = new _AlwaysBetray2.default();
var alwaysCooperate = new _AlwaysCooperate2.default();

prisonersDilemma.simulateGame(titForTat, randomChoice);
prisonersDilemma.simulateGame(titForTat, alwaysBetray);
prisonersDilemma.simulateGame(titForTat, alwaysCooperate);

prisonersDilemma.simulateGame(randomChoice, alwaysBetray);
prisonersDilemma.simulateGame(randomChoice, alwaysCooperate);

prisonersDilemma.simulateGame(alwaysBetray, alwaysCooperate);

prisonersDilemma.simulateGame(titForTat, titForTat);
prisonersDilemma.simulateGame(randomChoice, randomChoice);
prisonersDilemma.simulateGame(alwaysBetray, alwaysBetray);
prisonersDilemma.simulateGame(alwaysCooperate, alwaysCooperate);

console.log(titForTat.name + ' score: ' + titForTat.score);
console.log(randomChoice.name + ' score: ' + randomChoice.score);
console.log(alwaysBetray.name + ' score: ' + alwaysBetray.score);
console.log(alwaysCooperate.name + ' score: ' + alwaysCooperate.score);