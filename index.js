import {getYoudaoApiUrl} from 'src/configs';
import {request} from 'src/network';

const youdaoUrl = getYoudaoApiUrl('hello');

request(youdaoUrl, (error, response, body) => {
  console.log('--------');
  console.log('body:', body);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('--------');
  const {
    errorCode,
    query,
    translation,
    basic,
    web,
    l,
    dict,
    webdict,
  } = response;
  console.log('errorCode', errorCode);
  console.log('query', query);
  console.log('translation', translation);
  console.log('basic', basic);
  console.log('web', web);
  console.log('l', l);
  console.log('dict', dict);
  console.log('webdict', webdict);
});
