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
  }


}


// socket.on('test', function(data) {
// 	console.log('test is', data);
// 	cb(data);
// });

export { io };