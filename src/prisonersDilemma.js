export default class PrisonersDilemma {
  constructor() {
    this.iterations = 200;
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

  pushHistory(player, selfBetray, opponentBetray) {
    if (player.opponentHistory) {
      player.opponentHistory.push(opponentBetray);
    }
    if (player.history) {
      player.history.push(selfBetray);
    }
  }

  simulateGame(playerOne, playerTwo) {
    for (let i = 0; i < this.iterations; i++) {
      const playerOneBetray = playerOne.play(i);
      const playerTwoBetray = playerTwo.play(i);
      // console.log(`${playerOne.name} betray: ${playerOneBetray}`);
      // console.log(`${playerTwo.name} betray: ${playerTwoBetray}`);
      // console.log("...");

      playerOne.score += this.calcResult(playerOneBetray, playerTwoBetray);
      playerTwo.score += this.calcResult(playerTwoBetray, playerOneBetray);

      this.pushHistory(playerOne, playerOneBetray, playerTwoBetray);

      // avoid duplicating history when players face themself
      if (playerOne !== playerTwo) {
        this.pushHistory(playerTwo, playerTwoBetray, playerOneBetray);
      }
    }
    playerOne.opponentsFaced.push(playerTwo.name);
    // avoid duplicating opponents faced when players face themself
    if (playerOne !== playerTwo) {
      playerTwo.opponentsFaced.push(playerOne.name);
    }
  }
}
