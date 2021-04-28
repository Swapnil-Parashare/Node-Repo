/********************************************   Exporting File : 4  ******************************************/ 


const num1 = 9;
const num2 = 12;

function addValues()
{
    console.log(`\nThe Sum is : ${num1 + num2}`);
}

addValues();

/*
     When there is a function call inside a module.
     And if this module is imported inside a file.(without assigning it to a variabel) i.e just require(./7-ming_graned.js)
     Then the function gets automatically called.

*/
