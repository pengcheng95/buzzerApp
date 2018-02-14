import openSocket from 'socket.io-client';
console.log(openSocket);
const socket = openSocket('http://localhost:3001');
console.log(socket);


let io = {
	sendPush: function() {
		console.log('sendPush');
		socket.emit('sendPush', 'pushed');
	},

  updateButton: function(cb) {
    console.log('working');
    socket.on('updateButton', function(data) {
      cb(data);
    })
  },

  createRoom: function(roomName) {
    console.log('sending room name');
    socket.emit('createRoom', roomName)
  },

  roomTaken: function(cb) {
    socket.on('roomTaken', function(data) {
      cb(data);
    })
  },

  roomCreated: function(cb) {
    socket.on('roomCreated', function(data) {
      cb(data);
    })
  },

  joinRoom: function(roomName) {
    console.log('joining room name');
    socket.emit('joinRoom', roomName);
  },

  joinedRoom: function(cb) {
    socket.on('joinedRoom', function(data) {
      cb(data);
    })
  },

  roomNoExist: function(cb) {
    socket.on('roomNoExist', function(data) {
      cb(data);
    })
  },

  buzz: function(username) {
    socket.emit('buzz', username);
  },

  buzzed: function(cb) {
    socket.on('buzzed', function(data) {
      cb(data);
    })
  },

  saveName: function(name) {
    socket.emit('saveName', name);
  }


}


export { io };