// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var j = 0;
var number = Math.floor(Math.random() * 21);
var word = "";



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);
    


    sock.on('data', function (data) {

        

        if (data.length == 10) {
            
            sock.write("OK");

        }

        if (j < 5) {

            j = j + 1;

            if (data.toString() == number.toString()) {

                sock.write("BINGO");
                var number2 = Math.floor(Math.random() * 21);
                word = parseInt(number2);
                number = word.toString();
                sock.destroy();
            }
            else {

                sock.write("WRONG");

            }
        }
        

    });

    sock.on('close', function (data) {

        sock.destroy();

    });

    sock.on('error', function (error) {
        // console.log("Eror");
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);