/*
Example 3 : setInterval
*/

setInterval(() => {
    console.log(`I am the Call_back!!!`);
},1000);
console.log(`I am the Last Task`);

/*
1] Again Call_back Function is handled by Event Loop.
2] Last line of code is executed.
3] Timer of Call_back expires and now it will continue to execute until you press Ctrl + C.
   As it is setInterval() and not setTimeout(), here process stays alive.
*/