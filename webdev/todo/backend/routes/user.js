const express = require('express')
const router = express.Router()
const { UserModel, TodoModel } = require('../db/index')
const {z, string} = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authMiddleware = require('../middlewares/auth')
const User_Secret = 'ahdfhehfaffedvs'

router.post('/signup',async(req,res) =>{
    //input validation
    const userBody = z.object({
        username: z.string().min(4).max(20),
        email : z.string().email(),
        password : z.string().min(4).max(8),
    })

    const parsedDataWithSuccess = userBody.safeParse(req.body)
    if(!parsedDataWithSuccess.success){
        
        res.json({
            message : "Invalid format",
            error : parsedDataWithSuccess.error
        })
         return
    }

      const {username,email,password} = req.body;
  
      try{
        const hashedPassword=  await bcrypt.hash(password,5)

        const user = await UserModel.create({
            username : username,
            email : email,
            password : hashedPassword
        })
        
        res.json({
            message : "sign up successfully",
            username : username,
            email : email,
            password : user.password
        })
    }catch(e){
        message : "error"
    }

})

router.post('/login',async(req,res) =>{
      const{email,password} = req.body;

            const user = await UserModel.findOne({
                email : email,
            })

            const passwordMatch = await bcrypt.compare(password,user.password)

            if(passwordMatch){
                const token = await jwt.sign({
                   userId: user._id.toString()
                },User_Secret)

                res.json({
                    message : "login successfully",
                    token : token
                })

            }else{
                res.json({ message : "invalid email or password"})
            }

})

router.get('/todos',authMiddleware, async(req,res) =>{
      const createdBy = req.userId
      console.log('createdBy: ', createdBy);

      try{
          const todos = await TodoModel.find({
            createdBy : createdBy
          })

          res.json({
            todos : todos,
            createdBy:createdBy
        })
      }
      catch(e){
        res.json({
            error : "error"
        })
      }

      
})



module.exports = router