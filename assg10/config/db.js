const mongoose=require('mongoose');
exports.dbConn=async()=>{
    try{
       const dbURL ="mongodb+srv://Chirag:23116516@cluster0.jxo87.mongodb.net/?retryWrites=true&w=majority";
       await mongoose.connect(dbURL)
       console.log(`Database connected`);
    
    }catch(err){
        console.log(`Database connection error ${err.message}`);
    }
}