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

            if (data.length == 10 && data.toString() == number) {

                sock.write("OK");
                // console.log(i);
                sock.write("BINGO");
                sock.destroy();


                i = 1;

            } else if(data.toString() != number){


                sock.write("Wrong");
                // console.log(i);
                // sock.destroy();


            }
            else if(data.length != 10)
            {

                sock.write("Wrong Useername");
                sock.destroy();
            }
            else{


                sock.write("END");
            }
        }

        

    
    });

sock.on('close', function (data) {

    // sock.destroy();

});

sock.on('error', function (error) {
    console.log(error);
});


}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);