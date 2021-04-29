
const http = require('http');

const server = http.createServer((req,res) =>
{
    if(req.url === '/')
    {
        res.end(`Welcome to our Home Page.`)
    }
    else if(req.url ==='/about')
    {
        res.end('This is Swapnil Parashare, developing his very first server.')
    }
    else if(req.url === '/contact')
    {
        res.end('Contact Number : +91 8421362980 ')
    }
    else if (req.url === '/block')
    {
        for(let i = 0 ; i < 1000000 ; i++)
        {
            console.log(`${i}`);
        }
        res.end(`Blocked Thread was released!!!!!!!`);
    }
    else                                                                                       // Here we are passing HTML for trial purpose to redirect our user to home page.
    {
        res.end(
        `<h1>Oops!!!</h1>
         <p>The Page you are looking for is not found.</p>
         <br>
         <br>
         <a href="/">Back to Home</a>`)
    }
})

server.listen(5500,()=>{console.log(`\nServer is listening to port : 5500........\n`)});                                     // In a single Node.js project no 2 servers can listen to single port. Make sure the port you give is not in use.                                 



/* Importance of Asynchrounous Functioning :-

1] When a single user blocks our Main - Thread, we are unable to serve our other users too.
2] So our "Server" gets down!!!!!, hence Asynchronous Funcitoning is neccessary.
3] Time consuming tasks can be progressed in background and we can serve our other users.

*/