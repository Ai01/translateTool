'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleDash = exports.colorOut = exports.colors = exports.commanderProgram = undefined;

var _commander = require('./commander');

var _commander2 = _interopRequireDefault(_commander);

var _showResult = require('./showResult');

var _showResult2 = _interopRequireDefault(_showResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.commanderProgram = _commander2.default;
exports.colors = _showResult2.default;
exports.colorOut = _showResult.colorOut;
exports.consoleDash = _showResult.consoleDash;