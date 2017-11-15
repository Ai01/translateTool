// import commander from 'commander';
import {
  getYoudaoApiUrl,
  parseResponseForYoudao,
} from 'src/configs';
import {request} from 'src/network';
import {commanderProgram, colorOut, consoleDash} from 'src/io';

// 命令行输入
commanderProgram.parse(process.argv);

// 获取查询的内容
const {query}= commanderProgram;

// 将内容拼接成url
const youdaoUrl = getYoudaoApiUrl(query|| 'hello');

// 向url发出请求
request(youdaoUrl, (error, response, body) => {
  const res = parseResponseForYoudao(body);
  const {
    errorCode,
    query,
    translation,
    basic,
    web,
  } = res;
  if (Number(errorCode)) {
    colorOut('错误:', 'white');
    colorOut(errorCode, 'red');
    consoleDash();
  }
  colorOut('查询内容:', 'white');
  colorOut(query, 'green');
  consoleDash();
  colorOut('翻译结果:', 'white');
  colorOut(translation, 'green');
  consoleDash();
  if (basic) {
    colorOut('字典:', 'white');
    colorOut(basic, 'yellow');
    consoleDash();
  }
  if (web) {
    colorOut('网络解释:', 'white');
    colorOut(web, 'grey');
    consoleDash();
  }
});


