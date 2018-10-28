!function(e){function n(n){for(var o,s,c=n[0],l=n[1],u=n[2],a=0,p=[];a<c.length;a++)s=c[a],r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(n);p.length;)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={main:0},i=[];function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=l;i.push([0,"vendors"]),t()}({"./node_modules/bindings sync recursive":
/*!************************************!*\
  !*** ./node_modules/bindings sync ***!
  \************************************/
/*! no static exports found */function(module,exports){eval('function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = "./node_modules/bindings sync recursive";\n\n//# sourceURL=webpack:///./node_modules/bindings_sync?')},"./node_modules/express/lib sync recursive":
/*!***************************************!*\
  !*** ./node_modules/express/lib sync ***!
  \***************************************/
/*! no static exports found */function(module,exports){eval('function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = "./node_modules/express/lib sync recursive";\n\n//# sourceURL=webpack:///./node_modules/express/lib_sync?')},"./node_modules/socket.io/lib sync recursive":
/*!*****************************************!*\
  !*** ./node_modules/socket.io/lib sync ***!
  \*****************************************/
/*! no static exports found */function(module,exports){eval('function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = "./node_modules/socket.io/lib sync recursive";\n\n//# sourceURL=webpack:///./node_modules/socket.io/lib_sync?')},"./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\nvar _socket = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Set socketIO to the server\nvar io = (0, _socket2.default)('http://localhost:8090/');\n\n// Get the button for the LED toggle in the DOM\nvar ledToggle = document.getElementById('led-toggle');\n\n// Set browser-side lightOn variable as true by default\nvar ledActive = true;\n\nif (ledToggle) {\n  ledToggle.addEventListener('click', function () {\n    ledActive = !ledActive;\n\n    ledToggle.innerHTML = ledActive ? 'Turn Off LED' : 'Turn On LED';\n\n    io.emit('toggle-led');\n  });\n}\n\n//# sourceURL=webpack:///./src/client/index.js?")},"./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _johnnyFive = __webpack_require__(/*! johnny-five */ \"./node_modules/johnny-five/lib/johnny-five.js\");\n\nvar _express = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _http = __webpack_require__(/*! http */ \"./node_modules/stream-http/index.js\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _socket = __webpack_require__(/*! socket.io */ \"./node_modules/socket.io/lib/index.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar server = _http2.default.Server(app);\nvar io = new _socket2.default(server);\nvar port = 8090;\n\napp.get('/', function (req, res) {\n  res.send('Hello Fucking World!');\n});\n\nserver.listen(port, function () {\n  console.log('[express] Listening on *:' + port);\n});\n\n// Init state\nvar ledActive = true;\n\n/**\n * Turn led on/off\n * @param led Led\n * @param status boolean\n */\nvar toggleLed = function toggleLed(led, status) {\n  if (status) {\n    led.on();\n  } else {\n    led.off();\n  }\n};\n\nvar board = (0, _johnnyFive.Board)();\nboard.on('ready', function () {\n\n  // Led instance connected on Arduino port 13\n  var led = new _johnnyFive.Led(13);\n\n  // This will grant access to the led instance\n  // from within the REPL that's created when\n  // running this program.\n  this.repl.inject({\n    led: led\n  });\n\n  toggleLed(led, ledActive);\n\n  io.on('connect', function (socket) {\n    console.log('[socket.io] Client has connected to server');\n\n    socket.on('toggle-led', function () {\n      console.log('[socket.io] toggle-led emitted');\n\n      ledActive = !ledActive;\n      toggleLed(led, ledActive);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/server/index.js?")},0:
/*!*********************************************************!*\
  !*** multi ./src/client/index.js ./src/server/index.js ***!
  \*********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./src/client/index.js */"./src/client/index.js");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */"./src/server/index.js");\n\n\n//# sourceURL=webpack:///multi_./src/client/index.js_./src/server/index.js?')},1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?")},2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?")},3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?")},4:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///./streams_(ignored)?")},5:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///./extend-node_(ignored)?")},6:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///http_(ignored)?")},7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?")},8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?")}});