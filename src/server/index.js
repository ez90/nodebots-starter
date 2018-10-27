import { Board, Led } from 'johnny-five';
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = 8090;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log('[express] Listening on *:' + port);
});
