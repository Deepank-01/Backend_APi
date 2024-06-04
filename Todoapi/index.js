// server set up
// To reload the server automatical we use the nodemon (npm i nodemon ) and then change the package.json scripts
const express=require("express");
const app=express();
require("dotenv").config();
const todoRouter=require("./routes/todo")

PORT=process.env.PORT||4000;
// Body parser to parser the HTML data into the json format
app.use(express.json());

// setting th defuakt route  
app.use("/api/v1",todoRouter);


app.listen(PORT,()=>{
    console.log("Server started succesfully at port number ",PORT);
})

app.get("/",(req,res)=>{
    res.send(`<h1>THis the Homepage of the API </h1>`)
})

// Conncetion with the DB
const dbconnect=require("./config/database")
dbconnect();