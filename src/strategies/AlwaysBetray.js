import Strategy from "../../lib/strategies/Strategy";

export default class AlwaysBetray extends Strategy {
  constructor(name) {
    super(name)
  }

  play(iteration) {
    return true;
  }
}
