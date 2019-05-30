"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Strategy2 = require("./Strategy");

var _Strategy3 = _interopRequireDefault(_Strategy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spiteful = function (_Strategy) {
  _inherits(Spiteful, _Strategy);

  function Spiteful(name) {
    _classCallCheck(this, Spiteful);

    return _possibleConstructorReturn(this, (Spiteful.__proto__ || Object.getPrototypeOf(Spiteful)).call(this, name));
  }

  _createClass(Spiteful, [{
    key: "play",
    value: function play(iteration) {
      // cooperate for first round
      if (iteration === 0) {
        return false;
      }

      // retaliate if opponent betrayed on any of the previous iterations
      for (var i = 0; i < iteration; i++) {
        if (this.games[this.games.length - 1].opponentHistory[i]) {
          return true;
        }
      }

      // otherwise cooperate
      return false;
    }
  }]);

  return Spiteful;
}(_Strategy3.default);

exports.default = Spiteful;