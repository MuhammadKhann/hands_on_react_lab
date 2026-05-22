import jsonServer from 'json-server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read db.json using standard fs to avoid import assertion syntax differences,
// while letting Vercel's Node File Trace (NFT) statically bundle db.json.
const db = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8')
);

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(db);

server.use(middlewares);

// Rewrite rules to strip /api prefix so json-server can map to resources in db.json
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

export default server;
