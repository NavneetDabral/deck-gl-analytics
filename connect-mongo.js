const mongoose =require('mongoose');
const URI = require('./config');
const connectDb = async () =>{
    
    try{
         await mongoose.connect(URI,{
            useNewUrlParser: true ,
            useUnifiedTopology: true   
           })
 
         console.log("database is connected");
      }
    catch (err){
        console.error(err);
         process.exit(1);
      }
}


module.exports = connectDb;