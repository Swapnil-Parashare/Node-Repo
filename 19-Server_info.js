/* Server :- A computer without GUI, which makes sure that the resources are always avialable.

1]Request are performed to Server , Respone is send by the Server
2]This is done using HTTP protocal, hence these are called as HTTP messages.

*/

/* How HTTP messages are structed?

1]  General Structure :-           Start Line
                                   Header(Optional)
                                   Blank Link          ----------> It indicates that all the meta info is being send. Affectively 'Headers are the Meta Info.
                                   Body(Optional)



2] Request Message :-              Start Line          ----------> A Method , URL , HTTP version   Eg: GET   /contact     HTTP/1.1
                                   Header(Optional)
                                   Blank Link          ----------> It indicates that all the meta info is being send. Affectively 'Headers are the Meta Info.
                                   Body(Optional)


a) GET is default request(Method) that a browser performs.
b) URL is just an address.
c) Headers is Meta Information about our request. They are just 'key:value' pairs
d) Body : 1) If user just want resource there is no body.
          2) If you want to add a resource onto the server then body is required.
          3) It is also called as 'Payload'.


3] Response Message :-             Start Line          ----------> A HTTP version , Status Code , Status Text   Eg: HTTP/1.1  200  OK
                                   Header(Optional)
                                   Blank Link          ----------> It indicates that all the meta info is being send. Affectively 'Headers are the Meta Info.
                                   Body(Optional)

a) Status Code : It signals what is the result of the request.
b) Header : Information about our Response Message. Key-Value Pair.


*/



                        /*****************************************  Node.js Finish  ********************************************/


/* Express.js :- 
 
1] Express.js is built on top of Node.js and more specifically on top of HTTP Module.
2] Hence we cannot use Express.js without Node.js

Further Files in Express.js Tutorial.

*/





        