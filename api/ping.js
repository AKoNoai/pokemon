// Simple ping - no external calls, no express, no serverless-http
// Used to verify Vercel function routing works
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ pong: true, t: Date.now() });
};
