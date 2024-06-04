const Post=require('../model/Post')

const createpost=async(req,res)=>{
    try{
        const{title,body}=req.body
const Create_post= await Post.create({title,body})
res.json({
    created:Create_post
})
    }
catch(err){
     res.status(500).json({
        message:"Error h in code",
        error:err
     })
    }
}
module.exports=createpost