import Strategy from "../../lib/strategies/Strategy";

export default class RandomChoice extends Strategy {
  constructor() {
    super();
    this.name = 'Random Choice';
  }

  play(iteration) {
    return !!Math.floor(Math.random() * Math.floor(2));
  }
}
