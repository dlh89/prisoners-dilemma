import Strategy from "./Strategy";

export default class NaiveProber extends Strategy {
  constructor() {
    super();
    this.name = 'Naive Prober';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on previous iteration
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1]) {
      return true;
    } else {
      // occasionally (25% chance) betray unprovoked
      const rand = Math.floor(Math.random() * Math.floor(4));
      if (rand === 3) {
        return true;
      }
    }

    // otherwise cooperate
    return false;
  }
}
