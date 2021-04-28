// In Node.js there is NO Window Object, there are Global Variables.

/*

  __dirname  :- path to current directory.
  __filename :- file name.
  require    :- function to use modules(CommonJS)
  module     :- information about current module (file)
  process    :- information about environment were the program is being executed.

*/

console.log(`__dirname  : ${__dirname}  \n__filename : ${__filename}  \nrequire    : ${require}  \nmodule     : ${module}  \nprocess    : ${process}`);

setInterval(() => {                                  // Here "Hello World" will loged to the console after ever 1 second. To exit press 'ctrl + c'.
    console.log(`Hello World`);     
}, 1000);

setTimeout(() => {                                   // Here "Time out " is loged only once after 5 seconds.
    console.log(`Time is out!!!`);
}, 5000);