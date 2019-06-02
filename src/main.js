import PrisonersDilemma from './PrisonersDilemma';
import TitForTat from './strategies/TitForTat';
import SuspiciousTitForTat from './strategies/SuspiciousTitForTat';
import HardTitForTat from './strategies/HardTitForTat';
import Pavlov from './strategies/Pavlov';
import Spiteful from './strategies/Spiteful';
import RandomChoice from './strategies/RandomChoice';
import AlwaysBetray from './strategies/AlwaysBetray';
import AlwaysCooperate from './strategies/AlwaysCooperate';
import AlternateBetray from './strategies/AlternateBetray';
import NaiveProber from './strategies/NaiveProber';
import RemorsefulProber from './strategies/RemorsefulProber';

const prisonersDilemma = new PrisonersDilemma();

const titForTat = new TitForTat();
const suspiciousTitForTat = new SuspiciousTitForTat();
const hardTitForTat = new HardTitForTat();
const pavlov = new Pavlov();
const spiteful = new Spiteful();
const randomChoice = new RandomChoice();
const alwaysBetray = new AlwaysBetray();
const alwaysCooperate = new AlwaysCooperate();
const alternateBetray = new AlternateBetray();
const naiveProber = new NaiveProber();
const remorsefulProber = new RemorsefulProber();

const players = [
  titForTat,
  suspiciousTitForTat,
  hardTitForTat,
  pavlov,
  spiteful,
  randomChoice,
  alwaysBetray,
  alwaysCooperate,
  alternateBetray,
  naiveProber,
  remorsefulProber
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

const sortedPlayers = players.sort((a, b) => b.score - a.score);

sortedPlayers.forEach(function(player, i) {
  console.log(`${i + 1} | ${player.name} (${player.score})`);
});
