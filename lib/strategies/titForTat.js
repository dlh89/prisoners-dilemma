'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TitForTat = function () {
  function TitForTat() {
    _classCallCheck(this, TitForTat);

    this.name = 'Tit for tat';
    this.opponentHistory = [];
    this.score = 0;
  }

  _createClass(TitForTat, [{
    key: 'play',
    value: function play(iteration) {
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
  }]);

  return TitForTat;
}();

exports.default = TitForTat;