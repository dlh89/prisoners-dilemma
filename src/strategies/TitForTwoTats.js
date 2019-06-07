import Strategy from "./Strategy";

export default class TitForTwoTats extends Strategy {
  constructor() {
    super();
    this.name = 'Tit for Two Tats';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on previous 2 iterations
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1] && this.games[this.games.length - 2].opponentHistory[iteration - 2]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
