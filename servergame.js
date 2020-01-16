// TCP Server

// ถ้า client ไม่ได้ส่งรหัสจะส่ง wrong username
// Server sent "Ok"
//server เก็บตัวเลขที่ random
// เช็คค่าที่ cleint ส่งมา ถูกตามตัวเลขจะส่ง BINGO
// ถ้าไม่ถูกจะส่ง WRONG
// จบการทำงานของโปรแกรม

var net = require('net');
var HOST = 'code.werapun.com';
var PORT = 6969;
var name = "6035512034"

net.createServer(function (sock) {

    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    
    sock.on('data', function (data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('You said "' + data + '"');
    });

    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);

