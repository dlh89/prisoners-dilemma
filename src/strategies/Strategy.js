export default class Strategy {
  constructor(name) {
    this.name = name;
    this.history = [];
    this.opponentHistory = [];
    this.opponentsFaced = [];
    this.score = 0;
  }
}
