// import modules
const Comment=require("../model/Comment")
const Post=require("../model/Post")

exports.CreateComment=async(req,res)=>{
try{
    const{post,user,body}=req.body
    // const{id}=req.params.id


    // creata commmit directly
    // const new_comment=new Comment({
    //     post,user,body
    // })
    // const savedComment=await new_comment.save();
    const savedComment = await Comment.create({ post, user, body });

    // update in the post
    // const upadate_post=await Post.findByIdAndUpdate(post,{comment:new_comment._id})
    const update_post=await Post.findByIdAndUpdate(post,{$push:{comment:savedComment._id}},{new:true}).populate("comment").exec();
    
    res.json({
        post:update_post,
        message:'Updated suucessfully'
    })
}
catch(err){
 return res.status(500).json({
    message:"Error in running the api",
    error:err
 })
}
}