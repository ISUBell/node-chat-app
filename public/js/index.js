var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Jennifer',
    text: 'I\'m creating a message'
  });
});

socket.on('newMessage', function (message) {
  console.log('New message received', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
