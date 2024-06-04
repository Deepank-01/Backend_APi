// import {Todo} from "../models/Todo"
const Todo=require("../models/Todo")

exports.getTodo=async(req,res)=>{
    try{
      const response=await Todo.find();
      res.status(200).json(
        {
            success:true,
            data:response,
            message:"Get request done succesfully"
        }
    );
    }
    catch(err){
        console.log("Error at the create todo")
        console.log(err)

    }
   

}