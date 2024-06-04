const mongoose=require('mongoose')

const post_Schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})
module.exports=mongoose.model("Post",post_Schema)