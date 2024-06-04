// Here we define the schema of the aoplication 
const mongoose=require("mongoose");

const TodoSchema= new mongoose.Schema(
    {
       title:{
        type:String,
        required:true,
        maxLength:50
       },
       description:{
        type:String,
        required:true,
        maxLength:50
       },
       createAt:{
        type:Date,
        required:true,
        default:Date.now()
       },
        updatesAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
}
)

module.exports=mongoose.model("Todo",TodoSchema)
// mongoose.model("Todo", TodoSchema): This part creates a Mongoose model named "Todo" based on the TodoSchema we defined earlier. When we call mongoose.model(), we're telling Mongoose to create a model with the name "Todo" that follows the structure defined in TodoSchema. This model will represent documents in the MongoDB collection named "todos".







