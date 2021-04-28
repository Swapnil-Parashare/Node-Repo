/********************************************   Exporting File : 2  ******************************************/ 


const sayHi = (name) =>{
    console.log(`\nHiiiii ${name}`);
}

module.exports = {sayHi};                                               // Exporting "sayHi" function.

/* As we are exporting a single function so no need to use {},
   But then we will not be using '.' dot to access the funcitonality.
*/