/****************************************************************  Event Loop Examples  ***************************************************************************/


/*
Important : Revise Event-Loop from "Upstart Notes" and "Namaste Javascript Notes"
*/

// Example 1 : setTimeout() , We have studied it in "Namaste Javascript".

console.log(`First Task`);

setTimeout(() => {
    console.log(`Fetching Data from Database.......(Very Time Consuming!!!)`)
},5000);

console.log("Last Task");


/* Explanation :-
   1]Here we faked the process of fetching data from Database using setTimeout() function.
   2]Call_Back Function of setTimeout() is handled by Event Loop.
   3]Thus we get output :- First Task
                           Last Task
                           Fetching Data from Database.......(Very Time Consuming!!!)

 */

