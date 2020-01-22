
// TCP Client

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
let i = 1;


var client = new net.Socket();
client.connect(PORT, HOST, function () {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write("6035512034");

});

client.on('data', function (data) {

    console.log('DATA: ' + data);
    // client.destroy();

    if (i < 6) {

        i = i + 1;

        if (data.toString() == "BINGO") {

            console.log("Number Correct");
            client.destroy();
        }
        else {

            var answer = Math.floor(Math.random() * 21);
            word = parseInt(answer + '');
            client.write(word.toString());
          
            

        }
    }

});

client.on('error', function (error) {
    // console.log(error);
});


// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});
