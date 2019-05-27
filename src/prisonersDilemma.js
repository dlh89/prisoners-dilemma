export default class PrisonersDilemma {
  constructor() {
    this.iterations = 5;
  }

  /**
    * player betrays and opponent doesnt: 0
    * both betray: -2
    * player stays silent and opponent betrays: -3
    * @param {bool} playerBetray
    * @param {bool} opponentBetray
    */
  calcResult(playerBetray, opponentBetray) {
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

  pushHistory(player, opponentBetray) {
    if (player.opponentHistory) {
      player.opponentHistory.push(opponentBetray);
    }
  }

  simulateGame(playerOne, playerTwo) {
    let playerOneScore = 0;
    let playerTwoScore = 0;

    for (let i = 0; i < this.iterations; i++) {
      const playerOneBetray = playerOne.play(i);
      const playerTwoBetray = playerTwo.play(i);
      console.log(`${playerOne.name} betray: ${playerOneBetray}`);
      console.log(`${playerTwo.name} betray: ${playerTwoBetray}`);
      console.log("...");

      playerOne.score += this.calcResult(playerOneBetray, playerTwoBetray);
      playerTwo.score += this.calcResult(playerTwoBetray, playerOneBetray);

      this.pushHistory(playerOne, playerTwoBetray);
      this.pushHistory(playerTwo, playerOneBetray);
    }
  }
}
