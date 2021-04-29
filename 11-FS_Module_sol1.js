/****************** 
    SOLUTION:1
*******************/

// Importing Inbuilt 'fs' Module.
const {readFile} = require('fs');

/*********************************************************  Normal way of Reading a File  ***********************************************************************/


readFile('./Content/first.txt','utf8',
(err,res)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log(`\n1]Normal Way of reading a file : ${res} `);
    }
})


/*********************************************************  Reading File using "Promises"  ***********************************************************************/


/* Note : Revise Promise Object from 'Upstart Notes'.

Explanation : 1]We are assinging an 'Anonymous Arrow Funciton' to variable 'getText'.
              2]We are explicityly telling 'Anonymous Arrow Function' to return "Promise Object.
              3]In the 'producing code' written inside the 'call_back function' of the 'Promise Object',
                we are actually reading a file.
              4]If file is read successfully then we are resolving the promise object, if some error occurs
                then we are rejecting the promise object.
              5]The 'getText' variable holds this promise object.
              6]Further consumer code is written on it. i.e .then() and .catch()

Conclusion :1] 'getText' variable takes the path and gives us Promise Object which is either resolved or rejected.
            2]  In short it takes path and gives us "File Content" or "Error".

*/


// Producer Code.

const getText = (path) =>                                                    // We are ultimately going to replace it with inbuilt "promisify()" funciton provided by inbuilt 'utils' module.                                  
 {                                            
    
                                                                    
    return new Promise( (resolve,reject) => {
                                                readFile(path,'utf8',(err,res)=> {
                                                                                     if(err)
                                                                                     {
                                                                                         reject(err);
                                                                                     }
                                                                                     else
                                                                                     {
                                                                                         resolve(res);
                                                                                     }
                                                                                 }       
                                                        )
        
                                             }
                      )
   

}

// Consumer Code 1.

getText('./Content/first.txt')
.then((res) => {console.log(`\n2]File is read using "Promise" and ".then() , .catch()" consumer code : ${res}`);})
.catch((err) =>{console.log(err);});



/*********************************************************  Reading File using "Promises" and "Async-Await"  ***********************************************************************/

//  Note : Revise Async-Await from "Upstart Notes".

/*
Important  : 1] While using async-await the producer code remains same i.e the way we are creating promise object remains same.
             2] Just our consumer code chagnes.
             3] Revise async-await.js and async-await2.js from "UpgradJs" Folder.
 
*/


// Consumer Code 2.

const start = async() => {
                            try
                            {
                                const second = await getText('./Content/second.txt');                    // We are waiting here for promise to be settled, await will handle it if it is resolved.
                                console.log(`\n3]File is read using "Promise" and "async-await" consumer code : ${second}`);
                            }
                            catch(err)                                                                   // If Promise is rejected we are handling it here inside the catch block.
                            {
                                console.log(err);
                            }
                            
                         }

start();            // Invoking our 'async funciton' i.e start.




/****************************************************  Explanation   *************************************************************************/
/*

A] 'async-function' returns 'Promise-Object' for sure.  :-        Case 1 : Async-Function is explicitly returning a 'Promise Object'.
                                                                  Case 2 : Async-Function does not returns a 'Promise Object'. But it returns a value.
                                                                           So function is made to return a 'Promise Object' by resolving it with the 
                                                                           value that the function was going to return.

B] What is use of asyn()?

   1}Our "start()" async-function comes in 'Case 2' as we are not returning any Promise Object from it explicitly,
     Infact we are not returning even a single value from it.

     Note :- Observe carefully we are actually returning a 'Promise Object' inside our start() function by calling "getText()" function.
     getText() takes 'path' as argument and gives us Resolved or Reject Promise Object.
     Hence a 'Promise Object' is returned inside start() function and not from the start() function.


   2]We don't even care what our start() function returns , we are envoking it without assigning it to a variable.

                              "Now the questions comes ' Why asyn? '

   3] ANSWER :-
      a)'await' can only be used inside 'async-functions'.
      b) Because of 'await' , Javascript waits until a particular 'Promise Object' gets resolved or rejected.
      c) Once the 'Promise Object' is settled follwing process takes place :-
                                                                            1] If Promise Object is resolved 'await' handles it and
                                                                               returns the 'value' with which it was resolved.
                                                                            2] If Promise Object is rejected "catch block" handles it.
                                                                               This is the reason we need to use try-catch block.
    
     Conclusion : The only reason we are using 'async' is that 'await' cannot be used inside 'non-async functions'.

*/


