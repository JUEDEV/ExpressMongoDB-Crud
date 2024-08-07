//File related to web server.
console.log('Testing');

const express = require('express');
const cors = require('cors');
const app = express();//Creating an express aplication.
var corsOptions = {//Defining cors option.
    origin: "http://localhost:8088"//Origin URL.
}
app.use(cors(corsOptions));//Using cors middleware.

//Parse requests of content-type - aplication/json/x-ww-form-urlencoded
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
const { connect } = require('mongoose');
db.mongoose
    .connect(db.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connect succesfully");        
    })
    .catch(err =>{
        console.log("DB connection not succesful",err);
        process.exit();        
    })
//simple route
app.get("/",(req,res)=>{
    res.json({message: "Hello There"})
});

//setting the port listen for requests
const PORT = process.eventNames.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)   
});