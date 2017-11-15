let program = require('commander');

program
  .version('0.0.1')
  .option('-q, --query [content]', 'query content');


// program
//   .command('ts <content>')
//   .description('something need to be translated')
//   .action((a)=>{
//     console.log(a);
//   });


export default program;
