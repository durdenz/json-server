const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const mw = jsonServer.defaults();

server.use(mw);
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('JSON server is running on port $(port)');
});
