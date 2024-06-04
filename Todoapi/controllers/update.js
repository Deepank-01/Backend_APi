const Todo=require("../models/Todo")

exports.updateTodo=async(req,res)=>{
    try{
      const {id}=req.params;
      const{title,description}=req.body;
      const response=await Todo.findByIdAndUpdate({_id:id},{title,description,updatesAt:Date.now()})

      res.status(200).json(
        {
            success:true,
            data:response,
            message:"Update request done succesfully"
        }
    );
    }
    catch(err){
        console.log("Error at the create todo")
        console.log(err)

    }
   

}