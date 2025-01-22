const express = require('express')
const router = express.Router()
const { TodoModel } = require('../db/index')
const authMiddleware = require('../middlewares/auth')


router.post('/',authMiddleware, async(req,res) =>{
      const {title,done,description} = req.body
      const createdBy = req.userId
      
      await TodoModel.create({
            title,
            description,
            done,
            createdBy
      })

      res.json({
            message : "todo created",
            createdBy: createdBy
      })
})

router.delete('/:id', authMiddleware, async(req, res) => {
      const todo_id = req.params.id;
      const adminId = req.userId
  
      try{
          await TodoModel.findByIdAndDelete({
              _id : todo_id,
              todoId : adminId
          })
  
      }catch(e){
          res.json({
              message : 'error in deleting todo'
          })
      }
      res.json({
          message : "deleted todo " ,
          _id : todo_id   
      })
  });

module.exports = router