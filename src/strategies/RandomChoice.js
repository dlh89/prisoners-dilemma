export default class RandomChoice {
  constructor() {
    this.name = 'Random choice';
    this.opponentHistory = false;
  }

  play(iteration) {
    return !!Math.floor(Math.random() * Math.floor(2));
  }
}
