
/*
             Example 2 : Here we will actually read data from another file using "Inbuilt Node Module i.e FS"
             Code is from "11-FS_Module_Async.js" file.  // Note : Revise it.
*/

const {readFile} = require('fs');

console.log("This is the First Task");

readFile('../Content/first.txt',                               // Reading Data from another file.                       
          'utf8',                                              
          (err,result) => {                                  
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

console.log("This is the Last Task!!!");

/*
Output :-  This is the First Task
           This is the Last Task
           Hello this is first text file.

Explanation :- 1] Reading Data from another file may be time consuming.
               2] We have used "readFile()" which is 'Asynchronous Method' of reading a file.
               3] Therefore "Event-Loop" handles it and we see this output.
*/