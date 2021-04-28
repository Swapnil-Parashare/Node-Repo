/**********************************************   OS Module   ****************************************************/


// Importing Built-in OS Module.
const os = require('os'); 



// Information about current user.
const user = os.userInfo()
console.log(`\nUser Information : `,user);


// System Uptime in seconds.
console.log(`System Uptime is ${os.uptime()} seconds.`);


// OS Information.
const currentOS = 
{
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(`OS Information = `,currentOS);