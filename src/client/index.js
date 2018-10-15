import 'babel-polyfill';
import socketIOClient from 'socket.io-client';

// Set socketIO to the server
const io = socketIOClient('http://localhost:8090/');

// Get the button for the LED toggle in the DOM
const ledToggle = document.getElementById('led-toggle');

// Set browser-side lightOn variable as true by default
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
