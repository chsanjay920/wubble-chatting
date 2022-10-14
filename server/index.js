var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, process.env.PORT || 3000, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
var port = 8000;
app.use(express.static(path.join(__dirname, "public")));
TotalClients = {};

io.on('connection', (socket) => {
    console.log('new connection made');

    socket.on('event1', (data) => {
        console.log(data);
    });
    //Initailly user joined
    socket.on('NewUserJoined', (username) => {
        TotalClients[socket.id] = username;
        io.sockets.emit('UsersList', TotalClients);
        try {
            socket.broadcast.emit('logs', { log: '' + username.username + ' joined ' });
        } catch (error) {
            console.log(error);
        }
    });
    socket.on('SendMessage', (data) => {
        io.to(data.userdetailes.SocketID).emit("newMessage",data.message);
        console.log("message sent");
    });
    //on user Disconnected
    socket.on('disconnect', name => {
        try {
            socket.broadcast.emit('logs', { log: '' + TotalClients[socket.id].username + ' disconnected ' });
        } catch (error) {
            console.log(error);
        }
        delete TotalClients[socket.id];
        io.sockets.emit('UsersList', TotalClients);
    });
    socket.emit('event2', {
        msg: 'Server to client, do you read me? Over.'
    });
});

server.listen(port, () => {
    console.log("Listening on port " + port);
});



// socket.on('event3', (data) => {
    //     console.log(data.msg);
    //     socket.emit('event4', {
    //         msg: 'Loud and clear :)'
    //     });
    // });