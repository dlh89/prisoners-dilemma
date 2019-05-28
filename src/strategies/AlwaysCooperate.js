import Strategy from "../../lib/strategies/Strategy";

export default class AlwaysCooperate extends Strategy {
  constructor(name) {
    super(name)
  }

  play(iteration) {
    return false;
  }
}
