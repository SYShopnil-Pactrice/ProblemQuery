var {allUserController, uniqeUserController, someDataController} = require("../controller/userController")
var getExpress = require("express"); 


var route = getExpress.Router()

route.get("/allUser", allUserController)
route.get("/:userName/details" , uniqeUserController)
route.get("/show/details" , someDataController)////!!!!Problem here

module.exports = route;