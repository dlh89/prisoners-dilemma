import Strategy from "../../lib/strategies/Strategy";

export default class AlwaysCooperate extends Strategy {
  constructor() {
    super();
    this.name = 'Always Cooperate';
  }

  play(iteration) {
    return false;
  }
}
