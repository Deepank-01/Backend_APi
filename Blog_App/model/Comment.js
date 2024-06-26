const mongoose=require('mongoose')

const Comments=new mongoose.Schema({

    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }

})

module.exports=mongoose.model("Comment",Comments)