import Game from './Game';

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
      player.game[player.game.length - 1].opponentHistory.push(opponentBetray);
    }
    if (player.history) {
      player.game[player.game.length - 1].history.push(selfBetray);
    }
  }

  simulateGame(playerOne, playerTwo) {
    // setup
    const players = [playerOne, playerTwo];
    players.forEach((function(player) {
      let opponent = players.filter(filterPlayer => filterPlayer !== player)[0];
      if (!opponent) {
        // playing against themselves
        opponent = player;
      }
      const game = new Game();
      player.games.push(game);
      player.opponentsFaced.push(opponent.name);
    }));

    for (let i = 0; i < this.iterations; i++) {
      // const playerOneBetray = playerOne.play(i);
      // const playerTwoBetray = playerTwo.play(i);

      // play moves for this round
      players.forEach(function(player) {
        let opponent = players.filter(filterPlayer => filterPlayer !== player)[0];
        if (!opponent) {
          // playing against themselves
          opponent = player;
        }
        // TODO avoid duplicating history when players face themselves
        player.games[player.games.length - 1].history.push(player.play(i));
        player.games[player.games.length - 1].opponentHistory.push(opponent.play(i));
      });

      // update player objects
      players.forEach((player) => {
        let opponent = players.filter(filterPlayer => filterPlayer !== player)[0];
        if (!opponent) {
          // playing against themselves
          opponent = player;
        }
        const playerBetray = player.games[player.games.length - 1].history[i];
        const opponentBetray = opponent.games[opponent.games.length - 1].history[i];
        player.score += this.calcResult(playerBetray, opponentBetray);
        player.games[player.games.length - 1].score += this.calcResult(playerBetray, opponentBetray);
      });
    }
    console.log(`${playerOne.name}: ${playerOne.games[playerOne.games.length - 1].score} | ${playerTwo.name}: ${playerTwo.games[playerTwo.games.length - 1].score}`)
  }
}
