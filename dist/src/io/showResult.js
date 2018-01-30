'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleDash = exports.colorOut = undefined;

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 彩色打印
var colorOut = exports.colorOut = function colorOut(input, color) {
  console.log(_colors2.default[color](input));
};

// 区分打印
var consoleDash = exports.consoleDash = function consoleDash() {
  console.log(_colors2.default.trap('-----------------------'));
};

exports.default = _colors2.default;