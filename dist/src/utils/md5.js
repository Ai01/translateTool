'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myMd5 = undefined;

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 对md5进行封装。防止出现中间层需求
var myMd5 = function myMd5(data) {
  // ToDo log
  // console.log('md5加密完成');
  return (0, _md2.default)(data);
};

// todo.对加密封装一个函数，可以输入数据和加密类型来统一管理。但是中间调用的是个个类似md5的自定义加密函数
// crypto node

exports.myMd5 = myMd5;