#!/usr/bin/env node
// import commander from 'commander';
import {getYoudaoApiUrl, parseResponseForYoudao, SAVE_FILE_URL} from 'src/configs';
import {request} from 'src/network';
import {commanderProgram, colorOut, consoleDash} from 'src/io';
import {saveContent} from 'src/utils/file';

// 命令行输入
commanderProgram.parse(process.argv);

// 获取查询的内容
const {query, from, to} = commanderProgram;

if (!query) {
  colorOut('请输入需要翻译的内容', 'red');
}

if (query) {
  // 将内容拼接成url
  const youdaoUrl = getYoudaoApiUrl(query, from, to);

  // 向url发出请求
  request(youdaoUrl, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    const res = parseResponseForYoudao(body);
    const {errorCode, query, translation, basic, web} = res;

    // 错误处理
    if (Number(errorCode)) {
      colorOut('错误:', 'white');
      colorOut(errorCode, 'red');
      consoleDash();
    }

    // 翻译相关内容打印
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

    // 将翻译的结果保存到某一个文件中
    saveContent(`{\n查询内容: ${query},\n 翻译结果: ${basic}\n}\n`, SAVE_FILE_URL);
  });
}
