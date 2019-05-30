import Strategy from "./Strategy";

export default class TitForTat extends Strategy {
  constructor(name) {
    super(name);
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on previous iteration
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
