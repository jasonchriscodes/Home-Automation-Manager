'use strict';

const { ExpressJS, Lambda, Webhook } = require('jovo-framework');
const { app } = require('./app.js');

// ------------------------------------------------------------------
// HOST CONFIGURATION
// ------------------------------------------------------------------

// ExpressJS (Jovo Webhook)
if (process.argv.indexOf('--webhook') > -1) {
  const port = process.env.JOVO_PORT || 3000;
  Webhook.jovoApp = app;

  Webhook.listen(port, () => {
    console.info(`Local server listening on port ${port}.`);
  });

  Webhook.post('/webhook', async (req, res) => {
    await app.handle(new ExpressJS(req, res));
  });
}

// AWS Lambda
exports.handler = async (event, context, callback) => {
  await app.handle(new Lambda(event, context, callback));
};

// const dev = process.env.NODE_ENV !== 'production';
// export const server = dev ? 'http://localhost:8080' : 'https://your_deployment.server.com';