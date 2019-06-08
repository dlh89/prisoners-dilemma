import Strategy from "./Strategy";

export default class HardMajority extends Strategy {
  constructor() {
    super();
    this.name = 'Hard Majority';
  }

  play(iteration) {
    // cooperate on first round
    if (iteration === 0) {
      return false;
    }

    const currentGame = this.games[this.games.length - 1];

    const playerBetrayals = this.tallyBetrayals(currentGame.history);
    const opponentBetrayals = this.tallyBetrayals(currentGame.opponentHistory);

    // retaliate if opponent has betrayed as much or more
    if (opponentBetrayals && opponentBetrayals >= playerBetrayals) {
      return true;
    }

    // otherwise cooperate
    return false;
  }

  tallyBetrayals(history) {
    let betrayals = 0;

    history.forEach((betrayal) => {
        if (betrayal) {
            betrayals++;
        }
    });

    return betrayals;
  }
}
