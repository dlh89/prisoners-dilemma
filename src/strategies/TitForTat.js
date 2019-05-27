export default class TitForTat {
  constructor() {
    this.name = 'Tit for tat';
    this.opponentHistory = [];
    this.score = 0;
  }

  play(iteration) {
    // cooperate for first round
    if (iteration === 0) {
      return false;
    }

    // retaliate if opponent betrayed on previous iteration
    if (this.opponentHistory[iteration - 1]) {
      return true;
    }

    // otherwise cooperate
    return false;
  }
}
