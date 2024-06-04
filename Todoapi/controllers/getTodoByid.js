// import {Todo} from "../models/Todo"
const Todo=require("../models/Todo")

exports.getTodoByid=async(req,res)=>{
    try{
        const {id}=req.params;
      const response=await Todo.findById({_id:id});
      res.status(200).json(
        {
            success:true,
            data:response,
            message:"Get is succesfully done"
        }
    );
    }
    catch(err){
        console.log("Error at the create todo")
        console.log(err)
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error"
            }
        )

    }
   

}