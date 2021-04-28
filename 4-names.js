/********************************************   Exporting File : 1  ******************************************/ 

const secret = "This is Secret!!!";

const name1 = "Swapnil";
const name2 = "Atharva";
const name3 = "Mayur";


// exports{} is empty.
// console.log(module);  



module.exports = {name1, name2, name3};                             // Here we are exporting the data which we want to share.



// export{...} contains the exported values.
// console.log(module);                  