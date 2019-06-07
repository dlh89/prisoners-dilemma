import Strategy from "./Strategy";

export default class PeriodicBetray extends Strategy {
  constructor() {
    super();
    this.name = 'Periodic Betray';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // betray every other third iteration
    if (iteration % 3 === 0) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
