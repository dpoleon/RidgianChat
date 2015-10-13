var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/test/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
/*
io.on('connection', function(socket){
  console.log('a user connected');
});
*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});
