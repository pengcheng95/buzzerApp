import socket from 'socket.io';
import db from '../../db';

const io = socket();

io.on('connection', function(socket){

  socket.on('sendPush', function(data) {
    io.emit('updateButton', true)
  })

  socket.on('createRoom', function(data) {
    db.get(data, function(err, reply) {
      console.log('reply', reply)
      if (!!!reply) {
        db.set(data, data, 'EX', 120)
        socket.room = data;
        socket.join(data);
        socket.emit('roomCreated', data);
      } else {
        socket.emit('roomTaken', 'roomTaken');
      }
    })

  })

  socket.on('disconnect', function() {
    console.log('user disconnected');
  })


})


io.listen(3001);

exports.default = io;