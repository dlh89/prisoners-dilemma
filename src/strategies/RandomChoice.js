import Strategy from "../../lib/strategies/Strategy";

export default class RandomChoice extends Strategy {
  constructor(name) {
    super(name)
  }

  play(iteration) {
    return !!Math.floor(Math.random() * Math.floor(2));
  }
}
