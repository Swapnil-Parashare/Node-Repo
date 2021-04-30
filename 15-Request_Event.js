// Importing inbuilt-module 'http'

const http = require('http');




// Normal Way of Creating a Server.

const server1 = http.createServer((req,res) => {
   res.end("Welcome to our Home Page!!! \nServer 1....");
})
server1.listen(5000);



// Using Event-Emitter API

const server2 = http.createServer();

server2.on('request',(req,res) => {res.end(`Welcome to our Home Page!!! \nServer 2....`)}) ;

server2.listen(5500);                                 

/*****************************  Explanation  *****************************/
/*
1] We created a server using 'http.createServer()'.
2] Normally it takes a call_back which takes 'req' and 'res' as arguments.
3] When someone visits our server and does particular request, we handles it inside that call_back function and responds to our client.
4] Here we have not used that 'call_back', but we have set an event on our server itself using .on() method.
5] As we know .on() takes an 'event' and 'call-back' funciton.
6] Our event is 'request' and remember when it comes to 'http' the "request" is a special keyword which resembles request from the server.  Reference : https://nodejs.org/docs/latest-v13.x/api/http.html#http_event_request
7] And our call_back funciton handles the event.

This is how different built-in modules relys on "Events" .
*/

