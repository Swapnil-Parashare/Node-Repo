/*
 Example 4 :-
 Code from "12-HTTP_Module.js". Revise it.
*/

const http = require('http');

// Create Server takes Call_back. Every time request is made by client, this Call_back() is called.
const server = http.createServer((req,res) =>
{
    res.end(`Hello World!!!`);                        // When client request(refrest browser), we are responding by "Hello World!!!"
    console.log('Request Event!!!');                  // At the same time we are logging to our console "Request Event!!!"
})



// In a single Node.js project no 2 servers can listen to single port. Make sure the port you give is not in use.                                 
server.listen(5000, () => {
    console.log(`\nServer is listening on port : 5000...........\n`);
});                                   

