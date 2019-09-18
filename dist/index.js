#!/usr/bin/env node
'use strict';

var _configs = require('./src/configs');

var _network = require('./src/network');

var _io = require('./src/io');

var _file = require('./src/utils/file');

// 命令行输入

// import commander from 'commander';
_io.commanderProgram.parse(process.argv);

// 获取查询的内容
var query = _io.commanderProgram.query,
    from = _io.commanderProgram.from,
    to = _io.commanderProgram.to;


if (!query) {
  (0, _io.colorOut)('请输入需要翻译的内容', 'red');
}

if (query) {
  // 将内容拼接成url
  var youdaoUrl = (0, _configs.getYoudaoApiUrl)(query, from, to);

  // 向url发出请求
  (0, _network.request)(youdaoUrl, function (error, response, body) {
    if (error) {
      console.error(error);
    }
    var res = (0, _configs.parseResponseForYoudao)(body);
    var errorCode = res.errorCode,
        query = res.query,
        translation = res.translation,
        basic = res.basic,
        web = res.web;

    // 错误处理

    if (Number(errorCode)) {
      (0, _io.colorOut)('错误:', 'white');
      (0, _io.colorOut)(errorCode, 'red');
      (0, _io.consoleDash)();
    }

    // 翻译相关内容打印
    (0, _io.colorOut)('查询内容:', 'white');
    (0, _io.colorOut)(query, 'green');
    (0, _io.consoleDash)();
    (0, _io.colorOut)('翻译结果:', 'white');
    (0, _io.colorOut)(translation, 'green');
    (0, _io.consoleDash)();
    if (basic) {
      (0, _io.colorOut)('字典:', 'white');
      (0, _io.colorOut)(basic, 'yellow');
      (0, _io.consoleDash)();
    }
    if (web) {
      (0, _io.colorOut)('网络解释:', 'white');
      (0, _io.colorOut)(web, 'grey');
      (0, _io.consoleDash)();
    }

    // 将翻译的结果保存到某一个文件中
    (0, _file.saveContent)('{\n\u67E5\u8BE2\u5185\u5BB9: ' + query + '\n, \u7FFB\u8BD1\u7ED3\u679C: ' + basic + '\n}\n', _configs.SAVE_FILE_URL);
  });
}