"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Strategy = function Strategy(name) {
  _classCallCheck(this, Strategy);

  this.name = name;
  this.history = [];
  this.opponentHistory = [];
  this.opponentsFaced = [];
  this.score = 0;
};

exports.default = Strategy;