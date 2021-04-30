// We are just setting up servers and send the big text file as a response to client's request


const http = require('http');
const fs = require('fs');


// Normally Reading a File.

const server1 = http.createServer((request,response) =>
{
const text = fs.readFileSync('./Content/Big_file2.txt');
response.end(`You are listening to Server : 1 \n\nIt is Reading File without "Streams" \n\n${text}`);
})

server1.listen(5000,() => {
   console.log(`Server:1 is listening to Port 5000................`);
});


// Reading File using 'Streams'.

const server2 = http.createServer((request,response) =>
{

const fileStream = fs.createReadStream('./Content/Big_file2.txt',{encoding : 'utf-8'} );

//  pipe() is pushing content from 'readStream' to 'writeStream'. We are piping the Content into our 'response-object'.

fileStream.on('open',() =>                                                                                                 // Piping Content into 'response' from 'readStream' to 'writeStream'.
{
   fileStream.pipe(response);                             
});

fileStream.on('error',(err) =>                                                                                             // Handling Errors if any.
{
   response.end(err);
})
})

server2.listen(5500,() => {
   console.log(`Server:2 is listening to Port 5500................`);
});




/******************************  Explanation  *****************************************/
/*

1]Visit both the server , open "Console", go to networks and refresh.
2]On both servers you will see file size : 2.6 MB . This is huge and we should share such big files.
3]In Server 1 --> Networks > Local Host  > Response Header  you can see 'Content Length' :2746374738  which is very big.
4]In Server 2 --> Networks > Local Host  > Response Header  you can see 'Transfer Encoding' : Chunked.
5] This is the difference. When using "Streams" we are not sends our Big Text file in one go, instead we are sending it in chunks.

*/