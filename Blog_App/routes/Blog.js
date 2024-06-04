const express=require('express')
const router =express.Router();

const {CreateComment}=require('../controllers/CommentController')
const CreatePost=require('../controllers/PostController')

router.post('/comments/create',CreateComment),
router.get("/",(req,res)=>{
    console.log("Working the app of v1")
})
router.post('/post/create',CreatePost)
module.exports=router;