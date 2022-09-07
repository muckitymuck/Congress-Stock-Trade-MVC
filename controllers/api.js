//const connectAPI = require('../config/api')
const Api = require('../models/Api')
 
 module.exports = {
   getAPI: async (req,res)=>{

      console.log(connectAPI())
      try{
         res.render(connectAPI())
      }catch(err){
          console.log(err)
      }
  },
 }