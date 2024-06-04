// after installing necressary packets
// installing the express 
const express=require('express');
const dbconnect = require('./config/database');
app=express();
// middle ware for the json data
app.use(express.json());

// mounting 
const Blogroute=require('./routes/Blog')
app.use("/api/v1",Blogroute)

require("dotenv").config();
const PORT=process.env.PORT||3000;
app.get("/",(req,res)=>{
res.send("Server started ")
})


app.listen(PORT,()=>{
    console.log("Server started succesfully at port number ",PORT);
})

// Connecting with db
dbconnect();