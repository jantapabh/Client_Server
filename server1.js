// TCP Server

var net = require('net');
var HOST = '34.0.0.0';
var PORT = 1414;
var j = 1;
// var number = Math.floor(Math.random() * 21);
var number = "15";
var word = "";
var i = 1;



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);



    sock.on('data', function (data) {

        if (j <= 6) {


            if (i == 1) {

                if (data.length == 10) {

                    sock.write("OK");
                    i = 0;

                } else {

                    sock.write("Wrong Username");
                    sock.destroy();

                }
            }

            if (i == 0) {

                if (data.length == 1 || data.length == 2) {

                    if (data.toString() == number.toString()) {


                        sock.write("BINGO");

                        sock.destroy();


                    }
                    else {

                        sock.write("Wrong");
                    }
                }


                j = j + 1;

            }
            
        }
        else{
                     
            sock.write("END");

        }
    });

    sock.on('close', function (data) {

        // sock.destroy();

    });

    sock.on('error', function (error) {
        // console.log(error);
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);