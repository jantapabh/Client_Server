
// TCP Client

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
let i = 0;


var client = new net.Socket();
client.connect(PORT, HOST, function () {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('6035512034');

});

client.on('data', function (data) {

    // console.log('DATA: ' + data);
    // client.destroy();

    if( i < 5 ){

        i = i+ 1;

        if(data == "BINGO")
        {
            
    

            console.log("Number Correct");
            client.destroy();
        }
        else{

            var answer = Math.floor(Math.random() * 21);
            word = parseInt(answer);
            client.write(word+'');
            console.log("Send Success");

        }
    }
       
});

client.on('error', function (error) {
    console.log("ERROR Connect");
});


// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});
