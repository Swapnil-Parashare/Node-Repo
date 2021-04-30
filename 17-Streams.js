/***********************************************  Streams  ***************************************************/

/* Basics about Streams :-

1] There are used to read and write sequencially.
2] There are 4 types of streams :-  
                                    Writeable : To write data sequencially.
                                    Readable  : To read data sequencially.
                                    Duplex    : To read and write data sequencially.
                                    Transform : Data can be modified while writing or reading.
3] We can use 'events' as 'data' at the end on 'streams'.

*/


/* Problem with Normal Reading :-

 1]In FS-Module we were reading files and assinging it to variable.
 2]But as the size of file gets bigger and bigger we can no longer assign it to a variable.

*/


// Importing 'createReadStream' from in-built 'fs' Module.

const {createReadStream} = require('fs');

// Try 1 at a time from below 4 codes.

const stream1 = createReadStream('./Content/Big_file.txt');                             // 1]Simply Reading file using 'streams'
stream1.on('data',(chunk) => {
   console.log(chunk);
});

const stream2 = createReadStream('./Content/big_file.txt',{highWaterMark:130000});      // 2]Changing Default Chunk size.{ 65KB(default) ----> 130KB }
stream2.on('data',(chunk) =>{
   console.log(chunk)
});

const stream3 = createReadStream('./Content/Big_file.txt',{encoding :'utf8'});          // 3]Changing encoding type to 'utf8'.
stream3.on('data',(chunk) => {
   console.log(chunk);
});

const stream4 = createReadStream('./Content/Big_file.txt');                              // 4]Handling Error.(Purposefully providing incorrect path.)
stream4.on('error',(err) => {
   console.log(err);
});

/***********************  Explanation  **********************/

/* 1]Simply Reading :-

1]"createReadStream()" takes file-path and  returns a "ReadStream".
2]We have our first console log of 65 Kilo Bytes (i.e 65000 Bytes) and then second console log of same size and this continues till our file ends.
3]'stream' is actually reading our file in chunks and a single chunk is of 65 KB by default.
4]Here we have set an event on our 'stream' using .on()
5]As we know it takes 2 Arguments, 'event' and 'call_back function'
6]Here the 'event' is "data" which is again a special keyword.                     Reference :- https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_event_data
7]And the call_back is just logging the stream in the console.

*/ 

/* 2]Changing Chunk Size :-

1] We can change the default size of chunk by passing additional argument in 'createReadStream()' which is "{highWaterMark : }".
2] We have changed it from 65KB to 130KB.(we doubled the chunk size)
3] Hence initially there were 4 console logs now there are only 2 console logs, as chunks size is increased.

*/

/* 
   3] Changing Encoding Type :-  We have changed encoding to 'utf8', so now we can see the actual text.
   4] Handling Error         :- a)"Stream" can also handle error.
                                b)Event must be given as 'error' which is again a keyword. 


*/
