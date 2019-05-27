var server = 'http://localhost';
var port = '1337';

var socket = io();
var myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  socket.emit('button', 'button clicked');
});


// listen for events
socket.on('button', function(data) {
  console.log('data from server: ', data);
});

socket.on('msg', function(msg) {
  console.log('msg: ', msg);
});
