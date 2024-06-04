const express=require("express")
const router =express.Router();
const {createTodo} =require("../controllers/createTodo")
const{getTodo}=require("../controllers/getTodo")
const{getTodoByid}=require("../controllers/getTodoByid")
const{updateTodo}=require("../controllers/update")
const{DeleteTodo}=require("../controllers/DeleteTodo")
// api calling with the path 
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodoByid/:id",getTodoByid);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',DeleteTodo);
module.exports=router;
