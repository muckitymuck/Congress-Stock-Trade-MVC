const Api = require('../models/Api')
 
 module.exports = {
   getAPI: async (req,res)=>{
      console.log(req.user)
      try{
          const todoItems = await Todo.find()
          const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
          res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
      }catch(err){
          console.log(err)
      }
  },
 }