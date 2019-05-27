var express = require('express');
var socket = require('socket.io');

var app = express();
var port = 1337;
var server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.use(express.static('public'));

var io = socket(server);
var connectedUsers = [];
var roomNumber = 1;

io.on('connection', function(socket) {
  console.log('user connected');
  console.log('socket: ' + socket.id);
  connectedUsers.push(socket.id);
  addToRoom(socket);

  socket.on('disconnecting', function() {
    console.log('user disconnected');
    console.log('socket.id:' , socket.id);
    // send message to room that user has connected
    var leavingRoom = Object.keys(socket.rooms).filter(item => item!=socket.id);
    console.log('leavingRoom: ', leavingRoom);
    io.sockets.in(leavingRoom).emit('msg', 'User ' + socket.id + ' left the room.');
   });

  socket.on('button', function(msg) {
    console.log('button click from client');
    io.emit('button', msg);
  });
});


function addToRoom(socket) {
  var roomCapacity = 2;
  var rooms = io.nsps['/'].adapter.rooms;
  var roomJoined = '';

  if (roomNumber === 1 && !rooms['room1']) {
    socket.join('room' + roomNumber);
    roomJoined = 1;
  } else {
    for (var i = 1; i <= roomNumber; i ++) {
      // connect to first room found which isn't full
      if (rooms['room' + i]
      && rooms['room' + i].length < roomCapacity) {
        socket.join('room' + i);
        roomJoined = i;
        break;
      }
    }
  
    // connect to a new room if current rooms are full
    if (!roomJoined) {
      if (rooms['room' + roomNumber]
      && rooms['room' + roomNumber].length >= roomCapacity) {
        roomNumber++;
        socket.join('room' + roomNumber);
        roomJoined = roomNumber;
      }
    }
  }


  socket.to('room' + roomNumber).emit('msg', 'User ' + socket.id + ' joined your room!');
  io.to(socket.id).emit('msg', 'You are in room no. ' + roomJoined);
}