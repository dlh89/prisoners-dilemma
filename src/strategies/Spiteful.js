import Strategy from "./Strategy";

export default class Spiteful extends Strategy {
  constructor() {
    super();
    this.name = 'Spiteful';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on any of the previous iterations
    for (var i = 0; i < iteration; i++) {
      if (this.games[this.games.length - 1].opponentHistory[i]) {
        return true;
      }
    }

    // otherwise cooperate
    return false;
  }
}
