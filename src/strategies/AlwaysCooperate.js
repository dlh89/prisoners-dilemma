export default class AlwaysCooperate {
  constructor() {
    this.name = 'Always co-operate';
    this.opponentHistory = false;
    this.score = 0;
  }

  play(iteration) {
    return false;
  }
}
