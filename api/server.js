const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Require db.json directly so Vercel's bundler automatically includes it,
// and pass it as an object to run json-server entirely in-memory (preventing EROFS errors).
const db = require('./db.json');
const router = jsonServer.router(db);

server.use(middlewares);

// Rewrite rules to strip /api prefix so json-server can map to resources in db.json
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

module.exports = server;
