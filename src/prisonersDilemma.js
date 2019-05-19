import TitForTat from './strategies/TitForTat';
import RandomChoice from './strategies/RandomChoice';
import AlwaysBetray from './strategies/AlwaysBetray';
import AlwaysCooperate from './strategies/AlwaysCooperate';

const ITERATIONS = 5;

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

function pushHistory(player, opponentBetray) {
  if (player.opponentHistory) {
    player.opponentHistory.push(opponentBetray);
  }
}

function simulateGame(playerOne, playerTwo) {
  let playerOneScore = 0;
  let playerTwoScore = 0;

  for (let i = 0; i < ITERATIONS; i++) {
    const playerOneBetray = playerOne.play(i);
    const playerTwoBetray = playerTwo.play(i);
		console.log(`${playerOne.name} betray: ${playerOneBetray}`);
		console.log(`${playerTwo.name} betray: ${playerTwoBetray}`);
    console.log("...");

    playerOneScore += calcResult(playerOneBetray, playerTwoBetray);
    playerTwoScore += calcResult(playerTwoBetray, playerOneBetray);

    pushHistory(playerOne, playerTwoBetray);
    pushHistory(playerTwo, playerOneBetray);
  }

  console.log(`${playerOne.name} score: ${playerOneScore}`);
  console.log(`${playerTwo.name} score: ${playerTwoScore}`);
}

const titForTat = new TitForTat();
const randomChoice = new RandomChoice();
const alwaysBetray = new AlwaysBetray();
const alwaysCooperate = new AlwaysCooperate();

simulateGame(titForTat, randomChoice);
