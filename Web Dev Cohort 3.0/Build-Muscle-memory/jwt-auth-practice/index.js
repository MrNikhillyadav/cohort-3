const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {z} = require('zod');
const {UserModel,TodoModel} = require('./db')

const app = express();
app.use(express.json());
const jwt_secret = " "


mongoose.connect('mongodb+srv://nikyadav20032003:e0u1Gam4rdA2ap6f@cluster0.orazjtw.mongodb.net/todo-app')
.then(() => console.log('Db connected!'))
.catch((e) => console.log("error : ", e) )

app.post('/signup',async (req,res) =>{
      
      const requireBody = z.object({
            username : z.string().min(4).max(20),
            email : z.string().min(3).max(20).email(),
            password : z.string().min(4).max(20),
      })
      
      const parsedDataWithSuccess = requireBody.safeParse(req.body)
      console.log(parsedDataWithSuccess)

      if(!parsedDataWithSuccess.success){
            res.status(400).json({
                  message : "Incorrect format",
                  error : parsedDataWithSuccess.error.errors
            });
            return
      }
      
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      
      let thrownError = false;
      try{
            const hashedPassword = await bcrypt.hash(password,5)
      
            await UserModel.insert({
                  username : username,
                  email : email,
                  password : hashedPassword
            })

      }
      catch(e){

            res.json({
                  message : 'User Already Exists'
            })
            thrownError = true;
      }
      if(!thrownError){

            res.json({
                  message : 'sign up successful',
            })
      }
            
})

app.post('/signin',async(req,res) =>{
      const password = req.body.password;
      const email = req.body.email;
    
      const user = await UserModel.findOne({
            email : email,
      })

      if(!user){

           res.status(403).json({
                        message : 'User does not exist '
                  })
            return
     } 
     
      const passowordMatch = await bcrypt.compare(password, user.password)

      if(passowordMatch){
            
            const token = jwt.sign({
                  id : user._id.toString() 
            },jwt_secret )
            
            res.json({
                  message : 'successfully sign in',
                  token : token    
            })

      }else{

            res.json({
                  message : 'Incorrect password'
            })
      }


})

function auth(req,res,next){
      const token = req.headers.token;
      const decodedResponseObj = jwt.verify(token,jwt_secret );

      if(decodedResponseObj){
            req.userId  = decodedResponseObj.id  // Store user ID in request object for future use
            next()
      }else{
            res.json({
                  message : 'You are not logged in'
            })
      }

}

app.get('/me',auth, async(req,res) =>{
      
      const user = await UserModel.findOne({
            _id : req.userId
      })

      if(user){
            res.json({
                  id: user._id,
                  username: user.username,
                  email: user.email,
            })
      }else{
            res.status(404).json({ message:'Not found'})
      }
})

app.post('/todo',async (req,res) =>{
      const userId = req.userId;
      const title = req.body.title;
      const done = req.body.done;

      const todo = await TodoModel.create({
            userId ,
            title ,
            done
      })

      if(todo){
            
            res.json({
                  message : 'Todo created successfully',
            })
      }else{
            res.status (500).json({ message:'Failed to create todo'})

      }
})

app.post('/todos',async (req,res)=>{
      const userId = req.userId;

      const alltodos = await TodoModel.find({
            userId ,
      })

      res.json({
            todos: alltodos
      })
})


app.listen(4001,(req,res) =>{
      console.log('Listening on port 4001')
})