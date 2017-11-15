import md5 from 'md5';

// 对md5进行封装。防止出现中间层需求
const myMd5 = (data) => {
  // ToDo log
  // console.log('md5加密完成');
  return md5(data);
};

// todo.对加密封装一个函数，可以输入数据和加密类型来统一管理。但是中间调用的是个个类似md5的自定义加密函数
// crypto node

export {myMd5};
