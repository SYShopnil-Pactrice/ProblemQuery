//get all require module
var getExpress = require("express");
var app = getExpress();
var bodyPartser = require("body-parser");
var mongoose = require("mongoose");
require("dotenv").config();
var dataBaseConnect = require("./dataBaseConnect")
var postRoute = require("./route/postRout")
var getRoute = require("./route/getRoute")

//work with dotenv file 
var port = process.env.PORT;

//body parser
app.use(bodyPartser.urlencoded({extended:true}))
app.use(bodyPartser.json())

//creat a server
app.listen(port, () => {console.log(`Server is running on ${port}`)})

//connect to the database
dataBaseConnect()

//root file
app.get("/", (req, res) => {
    res.send("<h1>I am from root</h1>")
})

//get route
app.use("/user" , getRoute)

//post route
app.use("/user" , postRoute)

//default file
app.get("*", (req, res) => {
    res.status(404).send("<h1>404 page not found</h1>")
})

