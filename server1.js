// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var number = [5, 8, 10, 15, 19];
let i = 0;


net.createServer(function (sock) {

    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);


    sock.on('data', function (data) {

        // console.log('DATA ' + sock.remoteAddress + ': ' + data);

        sock.write("OK !!!!!!!"); //่ส่วนตอบกลับไยัง client

    });

    sock.on('close', function (data) {
        // console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);

        if (i < 5) {
            i = i + 1;
            if (data == number) {
                sock.write("BINGO");
            }
            else {

                sock.write("WRONG");

            }
        }

    });

    sock.on('error', function (error) {
        console.log('ERROR Connect : ' + sock.remoteAddress + ' ' + sock.remotePort);
    });


}).listen(PORT, HOST);

// console.log('Server listening on ' + HOST + ':' + PORT);