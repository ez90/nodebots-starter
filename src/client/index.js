import 'babel-polyfill';
import socketIOClient from 'socket.io-client';

import './scss/app.scss';

// Set socketIO to the server
const io = socketIOClient('http://localhost:8090');

// UI dynamic elements
const ledToggle = document.getElementById('led-toggle');
const temperature = document.getElementById('temperature');

let ledActive = true;

if (ledToggle) {
  ledToggle.addEventListener('click', () => {
    ledActive = !ledActive;

    ledToggle.innerHTML = (ledActive)
      ? 'Turn Off LED'
      : 'Turn On LED';

    io.emit('toggle-led');
  });
}

if (temperature) {
  io.on('temperature-reading', function (message) {
    temperature.innerHTML = parseInt(message);
    let hue = 200 - (parseInt(message) * 5);
    document.body.style.backgroundColor = "hsl(" + hue + ", 60%, 65%)";
  });
}
