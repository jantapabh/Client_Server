let net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

let client = new net.Socket();
client.connect(PORT, HOST , function() {


    console.log('Client COnnect');


    client.write('I am Client');
});


client.on('data', function(data) {  //ส่วนการทำงานของ client 

    console.log('DATA : '+ data);
    client.destroy(); //ให้จบโปรแกรมและตัดการเชื่อมต่อ
});

client.on('error', () => {

    console.log('Error : ', +error);
});

client.on('Close', function(){

    console.log('Connection close');
});



//Client Connect 