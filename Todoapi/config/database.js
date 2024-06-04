// npm i mongoose
// npm i dotenv
const mongoose=require("mongoose")
require("dotenv").config()
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("Sucessfully connected DB"))
    .catch((err)=>{
        console.log("Errrror in the connection with the DB")
        console.log(err)
        process.exit(1)
    })
}
module.exports=dbconnect;