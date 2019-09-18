import fs from 'fs';

// 将内容存到文件中
export const saveContent = (content, fileName, cb) => {
  // 检查文件是否存在
  const isExists = fs.existsSync(fileName);

  console.log(isExists);
  if (!isExists) {
    // 创建文件, 将内容加入文件
    fs.writeFile(fileName, content, () => {
      console.log(`翻译保存: ${fileName}`);
      if (typeof cb === 'function') {
        cb();
      }
    });
  } else {
    // 将内容加入文件
    fs.appendFile(fileName, content, () => {
      console.log(`翻译保存: ${fileName}`);
      if (typeof cb === 'function') {
        cb();
      }
    });
  }
};
