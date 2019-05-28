import Strategy from "../../lib/strategies/Strategy";

export default class Pavlov extends Strategy{
  constructor(name) {
    super(name)
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on any of the previous 3 iterations
    if (this.opponentHistory[iteration - 1] === this.history[iteration - 1]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
