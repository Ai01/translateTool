import {youdaoSupportLanguageList} from 'src/configs';
let program = require('commander');

program
  .version('0.0.1')
  .usage('[options]')
  .option('-q, --query <content>', 'query content')
  .option('-f, --from <support language>', 'from')
  .option('-t, --to <suuport language>', 'to');


program
  .command('ls')
  .description('support language list')
  .action(()=>{
    const tip = Object.entries(youdaoSupportLanguageList).map(([key, value])=>{
      return `${value.name}: ${key}`;
    });
    console.log(tip.join('\n'));
    // 防止后续查询发生
    process.exit();
  });


export default program;
