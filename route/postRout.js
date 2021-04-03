//require part 
var {registrationController, loginController} = require("../controller/userController")
var getExpress = require("express");


var route = getExpress.Router()

route.post("/registration", registrationController)
route.post("/login", loginController)

//export part
module.exports = route