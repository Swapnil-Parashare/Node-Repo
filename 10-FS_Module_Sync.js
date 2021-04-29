/*********************************************  File System Module  *************************************************/

// Asynchronous Way : Non-Blocking
// Synchronous Way : Blocking



//A]Synchronous

// Importing FS Module.

const {readFileSync, writeFileSync} = require('fs');                      // const fs = require('fs');  // It means the same.



// 1]Reading the File :- Using "readFileSync()", it takes 2 Arguments, Path and Encoding type.

const first = readFileSync('./Content/first.txt','utf8');
const second = readFileSync('./Content/second.txt','utf8');
console.log(`\n${first} \n${second}`);




// 2]Creating the File :- Using "writeFileSync()", it takes 2 Arguments, Path and Content of the File.

/* a)If the file of given path already exit, then it is re-written with the given content.
     If if no file of such name exit then it is created by node.js for us.
*/

writeFileSync(  './Content/result-sync.txt',                                                                  // File Path
                `\nThis is the Result of Synchronous File Creation: \t\n\n${first} \t\n${second}`             // Content of the file.
             );        
 
             



// b)If You just want to append the file.

writeFileSync(  './Content/result-sync.txt',                                                                  // File Path
                `\n\nThis is the Appended Content.(With the help of flag.)`,                                  // Content of the file which is to be appended.
                 {flag:'a'}                                                                                   // For appending you need to add flag as 'a'.                       
             );

