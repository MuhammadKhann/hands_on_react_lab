const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Rewrite rules to strip /api prefix so json-server can map to resources in db.json
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

module.exports = server;
