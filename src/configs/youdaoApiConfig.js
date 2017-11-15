import {myMd5} from 'src/utils/md5';

// 有道appKey
const appId = '201dac7ab5c2649f';

// 随机数，有道api需要
const salt = 2;

// 有道的密钥
const appKey = 'ZCwRLMnxfjMpgmaI9erVS5uhJCR1UHde';

// 有道api的url
const youdaoApiUrl = 'http://openapi.youdao.com/api';

// 支持语言列表

// ToDo
// value是有道的格式，key是本程序的格式。其它的api的支持语言列表的key也需要满足这个要求。
// 需要在utils中写一个函数来实现这个事情

const supportLanguageList = {
  ch: 'zh-CHS', // 中文
  ja: 'ja', // 日文
  en: 'EN', // 英文
  ko: 'ko', // 韩文
  fr: 'fr', // 法文
  ru: 'ru', // 俄文
  pt: 'pt', // 葡萄牙文
  es: 'es', // 西班牙文
};

// 获取有道请求url
/**
 *
 * @param {string} [q="test"] 需要查询的字段默认值为test
 * @param {string} [from="EN"] 输入的语言类型默认是英文
 * @param {string} [to="zh-CHS"] 输出的语言类型默认为中文
 * @returns
 */
const getYoudaoApiUrl = (q = 'test', from = 'en', to = 'ch') => {
  // 通过md5生成的签名。用传入的字符就可以
  const sign = myMd5(`${appId}${q}${salt}${appKey}`);
  const _from = supportLanguageList[from];
  const _to = supportLanguageList[to];
  // url中q需要编码
  const _q = encodeURI(q);
  return `${youdaoApiUrl}?q=${_q}&from=${_from}&to=${_to}&appKey=${appId}&salt=${salt}&sign=${sign}`;
};

export {getYoudaoApiUrl};
