const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

//use Port if available, otherwise local port is 3000
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Mike Bell',
    text: 'Good to see you!',
    createdAt: 12072017
  });

  socket.on('createMessage', (newMessage) => {
    console.log('create message', newMessage);
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
