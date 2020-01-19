// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var j = 0;
const number = ["1", "5", "7", "15", "20"];
var word = "";
var server = new net.Socket();



server.createServer(function (server) {



    console.log('Strat connect : ' + server.remoteAddress + ':' + server.remotePort);


    server.on('data', function (data) {


        word = toString(data);

        server.write("OK");

        if (j <= 5) {

            j = j + 1;  

            if (data != word) {

                console.log("WRONG");
                server.write("WRONG");
                console.log(' ', +data);

            }
            else if (data == "1") {

                console.log("BINGO");
                server.write("BINGO");
                console.log(' ', +data);
                server.destroy();


            }
            else if (data == "5") {

            
                console.log("BINGO");
                server.write("BINGO");
                console.log(' ', +data);
                server.destroy();


            }
            else if (data == "7") {

                // console.log("WRONG");
                // sock.write("WRONG");
                // console.log(' ', +data);

                // number = number + 1;
                console.log("BINGO");
                server.write("BINGO");
                console.log(' ', +data);
                server.destroy();


            }
            else if (data == "15") {

                // console.log("WRONG");
                // sock.write("WRONG");
                // console.log(' ', +data);

                // number = number + 1;
                console.log("BINGO");
                server.write("BINGO");
                console.log(' ', +data);
                server.destroy();


            }
            else {

                console.log("BINGO");
                server.write("BINGO");
                console.log(' ', +data);
                server.destroy();




            }

        }else{


            server.write("END");
        }
        
    });


    server.on('error', function (error) {
        console.log("Eror !!!!!!!");
    });


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);