var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', 'message:' + msg);
  });
});

http.listen(3000, function () {
});
