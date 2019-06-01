import PrisonersDilemma from './PrisonersDilemma';
import TitForTat from './strategies/TitForTat';
import SuspiciousTitForTat from './strategies/SuspiciousTitForTat';
import HardTitForTat from './strategies/HardTitForTat';
import Pavlov from './strategies/Pavlov';
import Spiteful from './strategies/Spiteful';
import RandomChoice from './strategies/RandomChoice';
import AlwaysBetray from './strategies/AlwaysBetray';
import AlwaysCooperate from './strategies/AlwaysCooperate';

const prisonersDilemma = new PrisonersDilemma();

const titForTat = new TitForTat();
const suspiciousTitForTat = new SuspiciousTitForTat();
const hardTitForTat = new HardTitForTat();
const pavlov = new Pavlov();
const spiteful = new Spiteful();
const randomChoice = new RandomChoice();
const alwaysBetray = new AlwaysBetray();
const alwaysCooperate = new AlwaysCooperate();

const players = [
  titForTat,
  suspiciousTitForTat,
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

const sortedPlayers = players.sort((a, b) => a.score - b.score);

sortedPlayers.forEach(function(player) {
  console.log(`${player.name} score: ${player.score}`);
});
