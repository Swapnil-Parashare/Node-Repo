/****************** 
    SOLUTION:3
*******************/

const {readFile,writeFile} = require('fs').promises;

const start = async() =>
{
    try
    {
        const first = await readFile('./Content/first.txt','utf8');
        const second = await readFile('./Content/second.txt','utf8');
        await writeFile('./Content/result-mind-grenade.txt',`\n\nAppending with the final simplified solution(sol3) \nNow the process has become highly simplified.\nIts Awesome!!!!!!!!!`,{flag:'a'} );

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

/* Final Solution :-

1] Here we are not even using 'utils' inbuilt module and its 'promisify()' funcitionality.
2] We just added '.promises' while importing our inbuilt 'fs' module.
3] Now same funtionality is provided by 'readFile()' and 'writeFile()' functions present inside 'fs' module.
4] We previously used these function just for reading and writing files "Asynchronously".
5] But now they will read or write the file respectively and will return the 'Resolved' or 'Rejected' Promise-Object.
6] We further can handle this Promise Object using 'Async-Await' by using 'try-catch' blocks as done above.
7] Thus we can easily avoid "Call_Back Hell" problem discussed in "11-FS_Module_Async.js" file.

    We will follow this method for rest of the course and afterwards too.

*/
