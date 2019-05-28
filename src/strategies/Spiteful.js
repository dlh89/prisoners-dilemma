import Strategy from "./Strategy";

export default class Spiteful extends Strategy {
  constructor(name) {
    super(name);
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on any of the previous iterations
    for (var i = 0; i < iteration; i++) {
      if (this.opponentHistory[i]) {
        return true;
      }
    }

    // otherwise cooperate
    return false;
  }
}
