const socket = io("http://localhost:8000");

let name = prompt("enter a name");

socket.emit("new_user_joined",name);