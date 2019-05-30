import PrisonersDilemma from './PrisonersDilemma';
import TitForTat from './strategies/TitForTat';
import HardTitForTat from './strategies/HardTitForTat';
import Pavlov from './strategies/Pavlov';
import Spiteful from './strategies/Spiteful';
import RandomChoice from './strategies/RandomChoice';
import AlwaysBetray from './strategies/AlwaysBetray';
import AlwaysCooperate from './strategies/AlwaysCooperate';

const prisonersDilemma = new PrisonersDilemma();

const titForTat = new TitForTat('Tit for Tat');
const hardTitForTat = new HardTitForTat('Hard Tit for Tat');
const pavlov = new Pavlov('Pavlov');
const spiteful = new Spiteful('Spiteful');
const randomChoice = new RandomChoice('Random Choice');
const alwaysBetray = new AlwaysBetray('Always Betray');
const alwaysCooperate = new AlwaysCooperate('Always Cooperate');

const players = [
  titForTat,
  hardTitForTat,
  pavlov,
  spiteful,
  randomChoice,
  alwaysBetray,
  alwaysCooperate
]

players.forEach(function(player) {
  // play against every player they haven't already faced (including themselves)
  players.forEach(function(opponent) {
    // ignore opponents already faced
    // TODO convert to arr filter
    if (!player.opponentsFaced.includes(opponent.name)) {
      prisonersDilemma.simulateGame(player, opponent);
    }
  })
});

players.forEach(function(player) {
  console.log(`${player.name} score: ${player.score}`);
});
