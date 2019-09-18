'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveContent = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 将内容存到文件中
var saveContent = exports.saveContent = function saveContent(content, fileName, cb) {
  // 检查文件是否存在
  var isExists = _fs2.default.existsSync(fileName);

  console.log(isExists);
  if (!isExists) {
    // 创建文件, 将内容加入文件
    _fs2.default.writeFile(fileName, content, function () {
      console.log('\u7FFB\u8BD1\u4FDD\u5B58: ' + fileName);
      if (typeof cb === 'function') {
        cb();
      }
    });
  } else {
    // 将内容加入文件
    _fs2.default.appendFile(fileName, content, function () {
      console.log('\u7FFB\u8BD1\u4FDD\u5B58: ' + fileName);
      if (typeof cb === 'function') {
        cb();
      }
    });
  }
};