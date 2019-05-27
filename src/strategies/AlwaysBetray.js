export default class AlwaysBetray {
  constructor() {
    this.name = 'Always betray';
    this.opponentHistory = false;
    this.score = 0;
  }

  play(iteration) {
    return true;
  }
}
