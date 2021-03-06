import Strategy from "../../lib/strategies/Strategy";

export default class HardTitForTat extends Strategy{
  constructor() {
    super();
    this.name = 'Hard Tit for Tat';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on any of the previous 3 iterations
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1]
      || this.games[this.games.length - 1].opponentHistory[iteration - 2]
      || this.games[this.games.length - 1].opponentHistory[iteration - 3]
      ) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
