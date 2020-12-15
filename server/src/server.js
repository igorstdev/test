const {Server} = require('http');
require('dotenv').config();

const server = new Server();

const {initializeDb, client} = require('./db');
const routeHandler = require('./modules');


initializeDb()
  .then(() => {
    server.on('request', (req, res) => routeHandler(req, res));
    server.listen(process.env.DB_PORT, process.env.DB_HOST, () => {
      console.log(`Server is listening on port ${process.env.DB_PORT}, host ${process.env.DB_HOST}`);
    });
  })
.catch((e) => {
  console.log('Error Establishing a Database Connection');
  client.end();
});