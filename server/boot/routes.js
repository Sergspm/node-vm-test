'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const logger = require('log4js').getLogger('routes');

module.exports = app => {
  (new Promise((resolve, reject) => {
    let filePath = path.normalize(path.join(__dirname, '../routes/ping.js'));
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
	});
  }))
  .then(data => {
    let code = data.toString();
    let script = new vm.Script(code);
    let sandbox = {
      app: app,
	  require: require
    };
    let context = new vm.createContext(sandbox);
    script.runInContext(context);
  })
  .catch(err => logger.error(err));
  /**/
};
