import PrisonersDilemma from './PrisonersDilemma';
import TitForTat from './strategies/TitForTat';
import RandomChoice from './strategies/RandomChoice';
import AlwaysBetray from './strategies/AlwaysBetray';
import AlwaysCooperate from './strategies/AlwaysCooperate';

const prisonersDilemma = new PrisonersDilemma();

const titForTat = new TitForTat();
const randomChoice = new RandomChoice();
const alwaysBetray = new AlwaysBetray();
const alwaysCooperate = new AlwaysCooperate();

// all play against each other
prisonersDilemma.simulateGame(titForTat, randomChoice);
prisonersDilemma.simulateGame(titForTat, alwaysBetray);
prisonersDilemma.simulateGame(titForTat, alwaysCooperate);
prisonersDilemma.simulateGame(randomChoice, alwaysBetray);
prisonersDilemma.simulateGame(randomChoice, alwaysCooperate);
prisonersDilemma.simulateGame(alwaysBetray, alwaysCooperate);

// all play against themselves
prisonersDilemma.simulateGame(titForTat, titForTat);
prisonersDilemma.simulateGame(randomChoice, randomChoice);
prisonersDilemma.simulateGame(alwaysBetray, alwaysBetray);
prisonersDilemma.simulateGame(alwaysCooperate, alwaysCooperate);


console.log(`${titForTat.name} score: ${titForTat.score}`);
console.log(`${randomChoice.name} score: ${randomChoice.score}`);
console.log(`${alwaysBetray.name} score: ${alwaysBetray.score}`);
console.log(`${alwaysCooperate.name} score: ${alwaysCooperate.score}`);
