const router = require('./api/healthcheck/index');
const space = require('./api/spaces/index');

function routes(api) {
  api.use('/api/healthcheck', router);
  api.use('/api/spaces', space);
}

module.exports = routes;
