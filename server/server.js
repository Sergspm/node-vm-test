'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const logger = require('log4js').getLogger('app');

const app = loopback();

app.start = () => {
  logger.info('Start app listen');
  return app.listen();
}

boot(app, __dirname, err => {
  if (err) {
    logger.error(err);
    throw err;
  }
  logger.info('Start app');
  app.start();
});

module.exports = app;
