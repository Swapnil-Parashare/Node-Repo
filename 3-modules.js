/********************************************   Importing File  ******************************************/ 



// Modules
/*
  * Node.js uses "CommonJS" Library.
  * Every file in Node.js is 'module' by default.
  * Module is nothing but encapsulated code which we can share.
*/


// Here we are required to use these variable names to access the imported functionality.

const names = require('./4-names');                                                                         // Importing  "names.js"                                  
const func = require('./5-utils');                                                                          // Importing  "utils.js"
const alterted_way = require('./6-alternative_way');                                                        // Importing  "alternative_way.js"                 

require(`./7-mind_graned`);                                                                                 // Variable assignment is not required as there is a funciton call inside the module.
                                                                                                            // It gets automatically called while execution.

func.sayHi(names.name1);                                                                   
func.sayHi(names.name2);
func.sayHi(names.name3);



console.log(`\nAltered Way imported data : 
                                         \nName    : ${alterted_way.data.name} 
                                         \nClass   : ${alterted_way.data.class}
                                         \nRoll No : ${alterted_way.data.roll_no}
                                         \nBranch  : ${alterted_way.data.branch} 
           `);

console.log(`\nAltered Way imported list : ${alterted_way.list}`)









/* Note:-
  
   Default-Export, Named-Export and Default-Import , Named Import is the method of importing and exporting in JS which is run through live server on browser.
   "module.export{}"" and "require()" is the method of importing and exporting in Node.js , here code is executed on machine itself and no browser is involved.
 
*/


