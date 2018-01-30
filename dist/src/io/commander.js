'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _configs = require('../configs');

var program = require('commander');

program.version('0.0.1').usage('[options]').option('-q, --query <content>', 'query content').option('-f, --from <support language>', 'from').option('-t, --to <suuport language>', 'to');

program.command('ls').description('support language list').action(function () {
  var tip = Object.entries(_configs.youdaoSupportLanguageList).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return value.name + ': ' + key;
  });
  console.log(tip.join('\n'));
  // 防止后续查询发生
  process.exit();
});

exports.default = program;