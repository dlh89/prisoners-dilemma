export default class AlwaysCooperate {
  constructor() {
    this.name = 'Always co-operate';
    this.opponentHistory = false;
  }

  play(iteration) {
    return false;
  }
}
