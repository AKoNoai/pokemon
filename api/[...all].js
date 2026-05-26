// Vercel uses native Node.js req/res - Express can be exported directly (no serverless-http needed)
const app = require('../backend');
module.exports = app;
