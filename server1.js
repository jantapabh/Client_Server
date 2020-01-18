// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var j = 0;
const number = ["1", "5", "7", "15", "20"];
var word = "";



net.createServer(function (sock) {

    // console.log(sock);


    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);


    sock.on('data', function (data) {


        word = data + '';

        // console.log('DATA ' + sock.remoteAddress + ': ' + data);

        // if (data.length == 10) {


            sock.write("OK");

            if (j < 5) {

                j = j + 1;

                if (data != number) {

                    // number = number + 1;
                    // // console.log("BINGO");
                    // sock.write("BINGO");
                    // // console.log(' ', +data);
                    // sock.destroy();

                    // console.log("WRONG");
                    sock.write("WRONG");
                    console.log(' ', +data);

                }
                else {

                    // console.log("WRONG");
                    // sock.write("WRONG");
                    // console.log(' ', +data);

                    number = number + 1;
                    // console.log("BINGO");
                    sock.write("BINGO");
                    console.log(' ', +data);
                    sock.destroy();


                }
            }
        // }
        // else{


        //     sock.write("Wrong Usename");
        //     sock.destroy();
        // }
        //่ส่วนตอบกลับไยัง client

    });

    sock.on('close', function (data) {


        console.log("END");
        // sock.destroy();


    });

    sock.on('error', function (error) {
        console.log("Eror !!!!!!!");
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);