/********************************************   Exporting File : 3  ******************************************/ 

// Directly exporting the list while creating it.
module.exports.list = ['Swapnil', 'Mayur', 'Atharva'];               // Here we need to use ".list" to access list.


const obj = {
                name    : "Swapnil Sanjay Parashare",
                class   : "SE-IT-B",
                roll_no : 27050,
                branch  : "Information Technology"
            }
     
module.exports.data = obj;                                           /* 
                                                                        Exporting Object. Here we need to use ".data" to access object instead of ".obj".
                                                                        This is because we have explicitly set ".data" property to 'export' object.
                                                                     */