import express from 'express';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

const userRouter = express.Router();

userRouter.post('/signup', async (req,res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password,5);

  try{
    const user = await UserModel.create({
      email,
      hashedPassword
    })
    
    if(!user){
      res.status(400).json({
        message : "user is not created"
      })
    }
    
    res.json({
      message : "user is signed up!"
    })
  }
  catch(e){
    res.status(500).json({
      message : "internal server error"
    })
  }
})

userRouter.post('/login', async (req,res) => {
  const { email, password } = req.body;
  
  try{
    const user = await UserModel.findOne({
      email,
    })
    
    if(!user){
      res.status(400).json({
        message : "user not signed up"
      })
    }
    
    const hashedPassword = bcrypt.compare(user.password, password);
    
    if(!hashedPassword){
      res.status(400).json({
        message : "invalid password"
      })
    }
    
    const token =  Jwt.sign({
      _id : user._id,
      email : user.email
    }, "JWT_SECRET_KEY")
    
    res.json({
      message : "user is signed up!",
      token
    })
  }
  catch(e){
    res.status(500).json({
      message : "internal server error"
    })
  }
})

export default userRouter;