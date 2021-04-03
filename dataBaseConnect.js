var mongoose = require("mongoose");
require("dotenv").config();

//work with dotenv file 
var mongoURL = process.env.URL;

//connect to the database
var dataBaseConnect = async ()=> {
    try{
        var mongooseConnection = await mongoose.connect(mongoURL, {useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser:true})
    
        if(mongooseConnection){
            console.log("Server is connected to the database");
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dataBaseConnect