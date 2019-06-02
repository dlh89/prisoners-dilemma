import Strategy from "./Strategy";

export default class RemorsefulProber extends Strategy {
  constructor() {
    super();
    this.name = 'Remorseful Prober';
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // if opponent betrayed on previous iteration
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1]) {
      if (this.games[this.games.length - 1].opponentHistory[iteration - 1] && this.games[this.games.length - 1].history[iteration - 1]) {
        // try to break the series of mutual betrayal by cooperating
        return false;
      }
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
