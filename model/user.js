//module require part
var mongoose = require("mongoose");

//
var UserSchema = mongoose.Schema

var studentSchema = new UserSchema({
    name:{
        required: [true, "name is required"],
        type: String
    },
    userName:{
        required: [true, "user name is required"],
        unique: true,
        type: String
    },
    password:{
        required: [true, "password is required"],
        type:String,
        min: 5
    },
    sex: {
        type: String
    },
    dateOfBirth:{
        type:Date,
        required: [true, "Date of birth is required"]
    },
    postTime:{
        type: String,
        default: Date.now
    }
}) 

//creat the model
var userModel = mongoose.model("student",studentSchema)

module.exports = userModel