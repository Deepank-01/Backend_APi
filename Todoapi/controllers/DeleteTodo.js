const Todo=require("../models/Todo")

exports.DeleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;

      const response=await Todo.findByIdAndDelete({_id:id});
      res.status(200).json(
        {
            success:true,
            data:response,
            message:"delete request done succesfully"
        }
    );
    }
    catch(err){
        console.log("Error at the create todo")
        console.log(err)

    }
   

}