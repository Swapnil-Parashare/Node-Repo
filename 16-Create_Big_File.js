// Creating Big file

// This Big File is required in 'Stream' Module.

const {writeFileSync} = require('fs');

for(let i = 0 ; i < 10000 ; i++)
{
   writeFileSync('./Content/Big_file.txt',`This is my Big File ${i}\n`, {flag:'a'});
}

// Very Big File is required for stream example


for(let i = 0 ; i < 100000 ; i++)
{
   writeFileSync('./Content/Big_file2.txt',`This is my Big File ${i}\n`, {flag:'a'});
}
