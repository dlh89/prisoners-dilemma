var server = 'http://localhost';
var port = '1337';

var socket = io();
var betray = document.getElementById('betray');

document.addEventListener('click', function(e) {
  if (e.target.id == 'betray' || e.target.id == 'silent') {
    var choice = e.target.id;
    socket.emit('choice', choice);
  }
});

// listen for events
socket.on('button', function(data) {
  console.log('data from server: ', data);
});

socket.on('msg', function(msg) {
  console.log('msg: ', msg);
});
