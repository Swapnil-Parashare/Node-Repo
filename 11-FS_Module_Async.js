// B]Asynchronous Way :- Here Call_Back Functions are used.

// Importing FS Module.
const {readFile, writeFile} = require('fs');


// 1] Reading a File using "readFile()".      Note : It takes 3 Arguments , Path, Encoding Type and Call Back Function.


readFile('./Content/first.txt',                                   // File Path. 
          'utf8',                                                 // Encoding Type.
          (err,result) => {                                       // Call_Back Function.
                              if(err)
                              {
                                  console.log(err);
                              }
                              else
                              {
                                  console.log(result);
                              }
                          }
        )


// 2] Creating a File using "writeFile()".   Note : It takes 3 Arguments, Path, Content and Call Back Function.

/* 
   Process :- 1] We will read our first.txt file. If it is successful then,
              2] We will read our second.txt file. If it is also successful then,
              3] We will create result-async.txt and will write the content of above two files in it.

*/

readFile('./Content/first.txt','utf8',(err1,result1) =>                                                // Initiating Reading first.txt.
{                                   
    if(err1)
    {
        console.log(err1);
        return
    }
    else
    {
        const first = result1;                                                                         // first.txt read successfully.

        readFile('./Content/second.txt','utf8',(err2,result2) =>                                       // Initiating Reading second.txt.
        {
            if(err2)
            {
                console.log(err2);
                return;
            }
            else
            {
                const second = result2;                                                                // second.txt read successfully.
                
                writeFile('./Content/result-async.txt',                                                // Initialing result-async.txt creation.
                        `\nThis is the Result of Asynchronous File Creation : \n${first} \n${second}`,
                         (err,result) =>     
                {                        
                    if(err)
                    {
                        console.log(err);
                        return;
                    }
                    else
                    {
                        console.log(`File Created Successfully!!!!`);

                    }
                })
            }
        })
    }
})

// As you can see there are call_backs inside call_back. This is called as "Call_Back Hell".