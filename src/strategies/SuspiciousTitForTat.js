import Strategy from "./Strategy";

export default class SuspiciousTitForTat extends Strategy {
  constructor() {
    super();
    this.name = 'Suspicious Tit for Tat';
  }

  play(iteration) {
    // betray on first round
    if (iteration === 0) {
      return true;
    }

    // retaliate if opponent betrayed on previous iteration
    if (this.games[this.games.length - 1].opponentHistory[iteration - 1]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
