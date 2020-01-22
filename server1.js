// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var j = 0;
var number = Math.floor(Math.random() * 21);
var word = "";
var i = 1;



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);



    sock.on('data', function (data) {



        if (i == 1) {

            if (data.length == 10) {

                sock.write("OK");

                i = 1;

            }

            if( i = 1){

                if (data.toString() == number.toString()) {

                    sock.write("BINGO");
                    sock.destroy();

                } else {

                    sock.write("WRONG");

                }

            }

            else {


                sock.write("Wrong Username");
                i = 0;


            }
        }
    });

    sock.on('close', function (data) {

        // sock.destroy();

    });

    sock.on('error', function (error) {
        // console.log("Eror");
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);