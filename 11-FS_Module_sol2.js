/****************** 
    SOLUTION:2
*******************/

const {readFile,writeFile} = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);



const start = async() =>
{
    try
    {
        const first = await readFilePromise('./Content/first.txt','utf8');
        const second = await readFilePromise('./Content/second.txt','utf8');
        await writeFilePromise('./Content/result-mind-grenade.txt',`\nThis is the Result of "Promisfy" Function from inbuilt 'util' Module. \n\n${first} \n${second}` );

        console.log(`First File Data : \n${first}`);
        console.log(`Second File Data : \n${second}`);
    }
    catch(err)
    {
        console.log(`Error Occured : \n${err}`);
    }
}

start();                                     //Invoking our 'async function'


/****************************************************  Explanation   *************************************************************************/

/*
1] Here we have same "start" async-function as in 'sol1.js' file.
   It does the same work, which is logging the readed file into the console.

2] There file was read by "getText()" function which takes the path and returns
   Resolved or Rejected "Promise Object".

3] Here file is read by "readFilePromise()" function. It takes 2 Arguments, 'Path' 
   and 'Encoding Type' and returns Resolved or Rejected "Promise Object" same as "getText()" function.

4] a)'util' is a in-built Node.js module.
   b)It provides us 'promisify()' function.
   c)It takes single argument either 'readFile' or 'writeFile'. 
     Note : 'readFile' and 'writeFile' are themselves the functions provided by inbuilt 'fs' module.
             We use them to read and write file in "Asynchronous" manner.

    Case 1:   const f1 = util.promisify(readFile).

              Now 'f1()' will take 'Path' and 'Encoding Type' as arguments.
              It will read the specified file and will return Resolved or
              Rejected Promise Object.

    Case 2:   const f2 = util.promisify(writeFile).

              Now 'f2()' will take 'Path' and 'Content' as arguments.
              It will write the given 'Content' in the specified file
               and will return Resolved or Rejected Promise Object.

    d) In this way 'utils' promisify() functionality is used.

5] getText() was written just to explain how the things work behind the scene in 
   utils(readFile) function. 


   Conclusion : a] By using above functionality we solved the problem of "Call_Back Hell"
                b] Here we are following same process as in "11-FS_Module_Async.js" file were we came to know aboout hell.

                    Process :- 1) We will read our first.txt file. If it is successful then,
                               2) We will read our second.txt file. If it is also successful then,
                               3) We will create result-async.txt and will write the content of above two files in it.
                c] We can see how clean the code is and also how easy it is to understand.

    Note : We are going to make code even clear and simple in next file.
*/