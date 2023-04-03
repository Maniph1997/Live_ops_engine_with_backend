const express = require("express");
const port= process.env.PORT || 8080;
const mongoose= require("mongoose");

const app= express();

mongoose.connect("mongodb://localhost:27017/user").then(()=>{
    console.log("successfully connected to database")
}).catch(()=>{
    console.log("failed to connect")
})

app.listen(port,()=>{
    console.log("server is started at" +" "+ port);
})