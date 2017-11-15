import colors from 'colors';

// 彩色打印
export const colorOut = (input, color)=>{
  console.log(colors[color](input));
};

// 区分打印
export const consoleDash = ()=>{
  console.log(colors.trap('-----------------------'));
};

export default colors;
