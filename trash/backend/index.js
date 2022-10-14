const io = require('socket.io')(process.env.PORT || 8000,{
    cors:{
        origin:"*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
})

var userArray = {};
io.on('connection',(socket=>{
    socket.on("new_user_joined",newuser =>{
        userArray[socket.id] = newuser;
        console.log("new user joined with name "+userArray[socket.id]+" and socket if of "+socket.id);
    });
    socket.on("test",name=>{
        console.log("test worked");
    })
    socket.on("disconnect",name =>
    {
        console.log(socket.id + " disconnected");
        delete userArray[socket.id]
        console.log(userArray);
    });
    console.log(userArray);
}))

