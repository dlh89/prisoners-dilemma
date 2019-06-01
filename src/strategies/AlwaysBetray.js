import Strategy from "../../lib/strategies/Strategy";

export default class AlwaysBetray extends Strategy {
  constructor() {
    super();
    this.name = 'Always Betray';
  }

  play(iteration) {
    return true;
  }
}
