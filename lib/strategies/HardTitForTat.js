"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Strategy2 = require("../../lib/strategies/Strategy");

var _Strategy3 = _interopRequireDefault(_Strategy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitForTat = function (_Strategy) {
  _inherits(TitForTat, _Strategy);

  function TitForTat(name) {
    _classCallCheck(this, TitForTat);

    return _possibleConstructorReturn(this, (TitForTat.__proto__ || Object.getPrototypeOf(TitForTat)).call(this, name));
  }

  _createClass(TitForTat, [{
    key: "play",
    value: function play(iteration) {
      // cooperate for first round
      if (iteration === 0) {
        return false;
      }

      // retaliate if opponent betrayed on any of the previous 3 iterations
      if (this.opponentHistory[iteration - 1] || this.opponentHistory[iteration - 2] || this.opponentHistory[iteration - 3]) {
        return true;
      }

      // otherwise cooperate
      return false;
    }
  }]);

  return TitForTat;
}(_Strategy3.default);

exports.default = TitForTat;