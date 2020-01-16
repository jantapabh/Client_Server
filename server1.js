// TCP Server

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var number = [5, 8, 10, 15, 19];
var j = 0;


net.createServer(function (sock) {

    // console.log(sock);


    console.log('Strat connect : ' + sock.remoteAddress + ':' + sock.remotePort);
     
    

    sock.on('data', function (data) {

        // console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write("OK");

        sock.write("OK");

        if (j < 5) {
    
            j = j + 1;
    
        
    
            if (data == number) {

                console.log("BINGO");
                sock.write("BINGO");
                console.log(' ', +data);
                sock.destroy();
              
    
            }
            else {
    
                console.log("WRONG"); 
                sock.write("WRONG");
                console.log(' ', +data);
    
            }
        }
        

        //่ส่วนตอบกลับไยัง client

    });

    sock.on('close', function (data) {


        // console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);

        console.log("END");
        // sock.destroy();


    });

    sock.on('error', function (error) {
        console.log("Eror !!!!!!!");
    });


}).listen(PORT, HOST);

// console.log('Server listening on ' + HOST + ':' + PORT);