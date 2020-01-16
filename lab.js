// let stdin = process.openStdin()
// stdin.addListener("data", function (str) {
//     console.log(str.toString().trim())
//     stdin.destroy() 
//  });

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;



net.createServer(function(socket){

    console.log('Connect : '+ socket.remoteAddress + ':'+ socket.remotePort);

    socket.on('data',function(data) {
        
         console.log('DATA ' + sock.remoteAddress + ': ' + data);
         sock.write('You said "' + data + '"');
    
    });


    socket.on('close',function(data) {

        console.log('CLOSED: ' + sock.remoteAddress);
    });


}).listen(PORT,HOST);

console.log('Server is Running at : ',PORT);


// //Callback Function

// let callback = (sock) => {
//     sock.on('data', () => {
//         console.log('incomming data : ',data);
//     })
// }