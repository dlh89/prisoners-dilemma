export default class RandomChoice {
  constructor() {
    this.name = 'Random choice';
    this.opponentHistory = false;
    this.score = 0;
  }

  play(iteration) {
    return !!Math.floor(Math.random() * Math.floor(2));
  }
}
