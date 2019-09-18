# 命令行翻译工具

## 介绍

> 自己使用的命令行翻译工具，目前只支持有道翻译api

## 调试参考

https://github.com/atian25/blog/issues/17

## 开发流程

1. git clone https://github.com/Ai01/translateTool.git
2. git checkout develop
3. npm run local
4. tsint -q \<content>
5. npm run unLocal // 清楚link

## 使用

1. npm install tsint -g 
2. tsint -q <content need to translate>

会将翻译结果自动保存到文件中: /Users/baihaihui/Desktop/tsintResult.txt

## todo

1. 增加google api的支持。同时重构代码使代码对多个api的支持更灵活
2. 支持appId，key的写入功能
3. 支持读
4. 使用puptter来实现免费的翻译功能

