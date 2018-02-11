import socket from 'socket.io';
import db from '../../db';

const io = socket();

io.on('connection', function(socket){

  socket.on('sendPush', function(data) {
    io.emit('updateButton', true)
  })

  socket.on('disconnect', function() {
    console.log('user disconnected');
  })


})


io.listen(3001);

exports.default = io;