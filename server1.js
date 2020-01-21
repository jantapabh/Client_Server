// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var j = 0;
const number = "1";
var word = "";



net.createServer(function (sock) {



    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);


    sock.on('data', function (data) {


        word = toString(number);

        sock.write("OK");
      

            if (data.toString() !== word) {

                console.log("WRONG");
                sock.write("WRONG");
                console.log(' ', +data);

            }
            else if (data.toString() == "1") {

                console.log("BINGO");
                sock.write("BINGO");
                console.log(' ', +data);
                sock.destroy();


            }
            
        });

    sock.on('close', function (data) {


        // console.log("END");
        // sock.destroy();


    });

    sock.on('error', function (error) {
        console.log("Eror !!!!!!!");
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);