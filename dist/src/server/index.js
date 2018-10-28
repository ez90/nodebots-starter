'use strict';

var _johnnyFive = require('johnny-five');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var io = new _socket2.default(server);
var port = 8090;

app.get('/', function (req, res) {
  res.send('Hello Fucking World!');
});

server.listen(port, function () {
  console.log('[express] Listening on *:' + port);
});

// Init state
var ledActive = true;

/**
 * Turn led on/off
 * @param led Led
 * @param status boolean
 */
var toggleLed = function toggleLed(led, status) {
  if (status) {
    led.on();
  } else {
    led.off();
  }
};

var board = (0, _johnnyFive.Board)();
board.on('ready', function () {

  // Led instance connected on Arduino port 13
  var led = new _johnnyFive.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  toggleLed(led, ledActive);

  io.on('connect', function (socket) {
    console.log('[socket.io] Client has connected to server');

    socket.on('toggle-led', function () {
      console.log('[socket.io] toggle-led emitted');

      ledActive = !ledActive;
      toggleLed(led, ledActive);
    });
  });
});