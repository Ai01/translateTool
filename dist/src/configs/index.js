'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youdaoSupportLanguageList = exports.parseResponseForYoudao = exports.getYoudaoApiUrl = exports.SAVE_FILE_URL = undefined;

var _youdaoApiConfig = require('./youdaoApiConfig');

// 翻译结果的保存地址
var SAVE_FILE_URL = exports.SAVE_FILE_URL = '/Users/baihaihui/Desktop/tsintResult.txt';

exports.getYoudaoApiUrl = _youdaoApiConfig.getYoudaoApiUrl;
exports.parseResponseForYoudao = _youdaoApiConfig.parseResponseForYoudao;
exports.youdaoSupportLanguageList = _youdaoApiConfig.youdaoSupportLanguageList;