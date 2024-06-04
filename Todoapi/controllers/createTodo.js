// import {Todo} from "../models/Todo"
const Todo=require("../models/Todo")

exports.createTodo=async(req,res)=>{
    try{
        const{title,description}=req.body;
        // creating the json object and inserting into the DB 
        const response=await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
            }
        );
    }
    catch(err){
        console.log("Error at the create todo")
        console.log(err)

    }
   

}