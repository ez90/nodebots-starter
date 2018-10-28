import { Board, Led } from 'johnny-five';
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = 8090;

app.get('/', function (req, res) {
  res.send('Hello Fucking World!');
});

server.listen(port, () => {
  console.log('[express] Listening on *:' + port);
});

// Init state
let ledActive = true;

/**
 * Turn led on/off
 * @param led Led
 * @param status boolean
 */
const toggleLed = (led, status) => {
  if (status) {
    led.on();
  } else {
    led.off();
  }
};

const board = Board();
board.on('ready', function () {

  // Led instance connected on Arduino port 13
  const led = new Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
  });

  toggleLed(led, ledActive);

  io.on('connect', (socket) => {
    console.log('[socket.io] Client has connected to server');

    socket.on('toggle-led', () => {
      console.log('[socket.io] toggle-led emitted');

      ledActive = !ledActive;
      toggleLed(led, ledActive);
    });
  });
});
