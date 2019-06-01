import Strategy from "../../lib/strategies/Strategy";

export default class Pavlov extends Strategy{
  constructor() {
    super();
    this.name = 'Pavlov';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if players did not agree on previous move
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1] !== this.games[this.games.length - 1].history[iteration - 1]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
