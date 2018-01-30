'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youdaoSupportLanguageList = exports.parseResponseForYoudao = exports.getYoudaoApiUrl = undefined;

var _md = require('../utils/md5');

// 有道appKey
var appId = '201dac7ab5c2649f';

// 随机数，有道api需要
var salt = 2;

// 有道的密钥
var appKey = '6JsjZZjiGzBHkFxqC8vZUWpJcvxHi23r';

// 有道api的url
var youdaoApiUrl = 'http://openapi.youdao.com/api';

// 支持语言列表

// ToDo
// value是有道的格式，key是本程序的格式。其它的api的支持语言列表的key也需要满足这个要求。
// 需要在utils中写一个函数来实现这个事情

var supportLanguageList = {
  ch: {
    value: 'zh-CHS',
    name: '中文'
  }, // 中文
  ja: {
    value: 'ja',
    name: '日文'
  }, // 日文
  en: {
    value: 'EN',
    name: '英文'
  }, // 英文
  ko: {
    value: 'ko',
    name: '韩文'
  }, // 韩文
  fr: {
    value: 'fr',
    name: '法文'
  }, // 法文
  ru: {
    value: 'ru',
    name: '俄文'
  }, // 俄文
  pt: {
    value: 'pt',
    name: '葡萄牙文'
  }, // 葡萄牙文
  es: {
    value: 'es',
    name: '西班牙文'
  } // 西班牙文
};

// 获取有道请求url
/**
 *
 * @param {string} [q="test"] 需要查询的字段默认值为test
 * @param {string} [from="EN"] 输入的语言类型默认是英文
 * @param {string} [to="zh-CHS"] 输出的语言类型默认为中文
 * @returns
 */
var getYoudaoApiUrl = function getYoudaoApiUrl() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'nothing';
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ch';

  // 通过md5生成的签名。用传入的字符就可以
  var sign = (0, _md.myMd5)('' + appId + q + salt + appKey);
  var _from = supportLanguageList[from] ? supportLanguageList[from].value : 'EN';
  var _to = supportLanguageList[to] ? supportLanguageList[to].value : 'zh-CHS';
  // url中q需要编码
  var _q = encodeURI(q);
  return youdaoApiUrl + '?q=' + _q + '&from=' + _from + '&to=' + _to + '&appKey=' + appId + '&salt=' + salt + '&sign=' + sign;
};

// 获取字典解释
var getBasic = function getBasic(basic) {
  if (!basic) {
    return null;
  }
  var explains = basic.explains;

  return explains;
};

// 获取网络解释
var getWeb = function getWeb(web) {
  if (!web) {
    return null;
  }
  return web && web.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;

    return key + ': ' + value;
  });
};

// 对返回结果进行整理
var parseResponseForYoudao = function parseResponseForYoudao(res) {
  if (!res) {
    throw new Error('没有需要解析的内容');
  }
  try {
    var _res = JSON.parse(res);
    var errorCode = _res.errorCode,
        query = _res.query,
        translation = _res.translation,
        basic = _res.basic,
        web = _res.web;

    return {
      errorCode: errorCode,
      query: query,
      translation: translation.join('\n'),
      basic: getBasic(basic) && getBasic(basic).join('\n'),
      web: getWeb(web) && getWeb(web).join('\n')
    };
  } catch (e) {
    console.error(e);
  }
};

exports.getYoudaoApiUrl = getYoudaoApiUrl;
exports.parseResponseForYoudao = parseResponseForYoudao;
exports.youdaoSupportLanguageList = supportLanguageList;