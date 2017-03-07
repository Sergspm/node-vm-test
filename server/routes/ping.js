'use strict';

const logger = require('log4js').getLogger('route-ping');

logger.info('init');

app.get('/ping', (req, res) => {
  logger.info('Ping requested');
  res.send('pong');
});
