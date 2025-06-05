const net = require('net');

const server=net.createServer();

server.on('connection',()=>{
    console.log('Connected to the server !')
})

server.on('close',()=>{
    console.log('Closing connection!')
})