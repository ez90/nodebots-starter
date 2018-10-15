import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = 8090;


io.on('connection', (socket) => {
  console.log('A connection occurs');

  socket.on('light-toggle', () => {
    console.log('light-toggle');
  });
});

app.use(express.static('dist'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve('dist/index.html'));
});

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});
