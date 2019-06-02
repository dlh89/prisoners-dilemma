import Strategy from "./Strategy";

export default class AlternateBetray extends Strategy {
  constructor() {
    super();
    this.name = 'Alternate Betray';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // betray every other iteration
    if (iteration % 2 !== 0) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
