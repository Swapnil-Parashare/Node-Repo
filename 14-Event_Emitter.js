/***************************** Events ************************************/ 

// Importing Inbuilt-Module 'events'
const EventEmitter = require('events');            // We get back the class inside our variable.(You can hover over it to confirm.) 

const CustomEmitter = new EventEmitter;            // Now we have instance of our class i.e we have the object.

/*  Various Methods are avialable :-

   on   : listen for an event. (It is used to set an event)
   emit : emit an event.       (It is used make an event happen and thereby invoking the call_back.)

 */

CustomEmitter.on('response', () => {console.log(`Event is Listened!!!`)});         // It takes 2 Arguments :- Event Name and Call_Back Function

CustomEmitter.on('response', () => {console.log(`Event is Listened Twice!!`)})     // We can set different call_backs for same event. 

CustomEmitter.on('response21', () => {console.log(`Its Not Over Until I Win!!!`)});

CustomEmitter.emit('response');                                                    // It takes single argument, i.e the event which is occuring.

CustomEmitter.emit('response21');

// Note : Here order matters , you can't place 'emit' before 'on'. We can't 'emit' an event before setting(.on) it.

/* 1]We can set parametres to our 'Call_Back Function' while setting up an event.
   2]While emmiting an event we can pass arguments, which will be passed to our Call_Back Function.
*/ 

CustomEmitter.on('Persistence',(name1,age) => {
   console.log(`My Name is ${name1}.\nI am ${age} years old.`);
});

CustomEmitter.emit('Persistence','Swapnil Sanjay Parashare',19);

// Events are the core building block of Node.js. , lot of built-in modules rely on it.
