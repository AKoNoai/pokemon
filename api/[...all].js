const serverless = require('serverless-http');
const app = require('../backend');

module.exports = serverless(app);
