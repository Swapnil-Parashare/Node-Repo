/*******************************************    HTTP Module     ***********************************************/

// Importing In-Built "http" module.
const http = require('http');


// Creating a server using "createServer()" , it takes Callback Function as Argument.

/* Call_back Fucntion have following two parametres.

   1]req Object :- Represents Incoming Request from the client.
   2]res Object :- Represents the Response that we are sending back.
*/

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

// Our server will be avialable on this specified port i.e "this is the port to which our server will be listening to" .
server.listen(5000);                                                

/*  Process :-
    1] First we need to run this file.
    2] Then go to browser localhost:5000.
    3] Then refresh the page.
    4] After refreshing the page, you can see output in VS-code Terminal.

    Note : After running the file , we are not getting outside the file in our terminal.
           i.e The execution doesn't ends. This is because server is always up to take 
           the request from the clients, process them and generate a response.
           From taking down our server i.e exiting we need to press "Ctrl + C".
*/
