'use strict';

/**
 * Генератор курловых запросов
 * @param method
 * @param data
 * @param url
 * @return {*}
 */
var generateCurlAnswer = function generateCurlAnswer(method, data, url) { // jshint ignore:line

  var token = `"X-Auth-Token: ${ window.sessionStorage.token }"`;

  switch (method) {
    case 'GET':
      method = '-X GET';
      data = '';
      break;
    case 'POST':
      method = '-X POST -d';
      data = `'${data}'`;
      break;
    case 'PUT':
      method = '-X PUT -d';
      data = `'${data}'`;
      break;
    case 'DELETE':
      method = '-X DELETE -H';
      data = `'${data}'`;
      break;
  }
  var curl = `curl --noproxy '*' -k -H ${token} ${method} ${data} '${url}'`;

  console.log(curl);

  return curl;

};
