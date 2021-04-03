//module require part
var userModel = require("../model/user")
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

//registration controller
var registrationController = async (req, res) => {
    try{
        var {name, userName, password, sex, dateOfBirth, postTime} = req.body //get the data from input body
        var hashedPassword = await bcrypt.hash(password , 10)
        var newUser = new userModel({
            name,
            userName,
            password: hashedPassword,
            sex,
            dateOfBirth,
            postTime
        })
        var saveData = await newUser.save()

        if(saveData){
            res.json({
                message:"New User creat successfully",
                user: saveData
            })
        }
    }
    catch(error){
        res.json({
            error
        })
    }
}

//login controller
var loginController = async (req, res) => {
    try{
        var {userName, password} = req.body; //get the user name and password from body
        var expectedUser = await userModel.findOne({userName})
        if(expectedUser){
            var passwordCheck = await bcrypt.compare(password, expectedUser.password)
            if(passwordCheck){
                res.json({
                    message:"login successfully",
                    data: expectedUser
                })
            }else{
                res.json({
                    message: "password doesn't match"
                })
            }
        }else{
            res.json({
                message:"User not found"
            })
        }
    }
    catch(error){
        res.json({
            error
        })
    }
}


//all user controller
var allUserController = async (req, res) => {
    try{
        var allUser = await userModel.find()
        res.status(200).send(
            allUser
        )
    }
    catch(err){
        res.send(err)
    }
}

//find uniq user ///!!!problem here
var uniqeUserController = async (req, res) => {
    try{
        var {userName} = req.params; 
        var findExpectedUser = await userModel.findOne({userName})
        if(findExpectedUser){
            res.status(200).json({
                message: "user found",
                findExpectedUser
            })
        }else{
            res.status(404).json({
                message:"user not available"
            })
        }
    }
    catch(err){
        res.json({
            err
        })
    }
}

//find some data of a user //!!!!problem here
var someDataController = async (req, res) => {
    try{
        var {username} = req.query
        console.log(username);
    }
    catch(err){
        res.json({
            err
        })
    }
}


//Export part
module.exports = {
    registrationController,
    loginController,
    allUserController,
    uniqeUserController,
    someDataController
}