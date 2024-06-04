const mongoose=require('mongoose')
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("DB created and connect susecfully")
    })
    .catch((err)=>{
        console.log("Database nahi connect hua")
        console.log(err)
    })
}
module.exports=dbconnect