import { Board, Led, Thermometer } from 'johnny-five';
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = 8090;

// Unnecessary :)
app.get('/', (req, res) => {
  res.send('Hello World!');
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

  // Sensor (tmp36) connected to analog port A0
  const tmp36 = new Thermometer({
    controller: 'TMP36',
    pin: 'A0',
  });

  // This will grant access to the components instances
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led,
    tmp36: tmp36,
  });

  toggleLed(led, ledActive);

  // [socket.io] Client has connected to server
  io.on('connect', (socket) => {
    tmp36.on('change', function () {
      socket.emit('temperature-reading', this.celsius);
    });

    socket.on('toggle-led', () => {
      ledActive = !ledActive;
      toggleLed(led, ledActive);
    });
  });
});
