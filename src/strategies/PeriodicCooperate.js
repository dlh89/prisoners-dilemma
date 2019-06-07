import Strategy from "./Strategy";

export default class PeriodicCooperate extends Strategy {
  constructor() {
    super();
    this.name = 'Periodic Cooperate';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // cooperate every other third iteration
    if (iteration % 3 === 0) {
      return false;
    }

    // otherwise betray
    return true;
  }
}
