import express from 'express';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { ContentModel, LinkModel, UserModel } from './db/model';
import { populate } from './../node_modules/dotenv/lib/main.d';
import { userMiddleware } from './userMiddleware';
import { JWT_PASSWORD, random } from './config';
import {z} from 'zod'
import bcrypt from 'bcrypt'


const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/brainly")
.then(() =>  console.log('db connected'))

app.post('/api/v1/signup',async(req,res) => {
          const {username, password} = req.body
          //TODO : Zod validation | password hash
          const requireBody = z.object({
                    username: z.string().min(3, 'username must be at least 3 characters'),
                    password: z.string().min(4, 'password must be at least 4 characters'),
          })

          const parsedDataWithSuccess = requireBody.safeParse(req.body)
          if(!parsedDataWithSuccess.success){
                    res.status(400).json({
                          message : "Incorrect format",
                          error : parsedDataWithSuccess.error.errors
                    });
                    return
              }

          try{      
                   const hashedPassword = bcrypt.hash(password,5)
                    const user = await UserModel.create({
                              username,
                              hashedPassword
                    })

                    res.status(200).json({
                              message: 'signed up',
                    })

          }
          catch(e){

                    res.json({
                              error : 'user already exists'
                    })
          }
         

          
})

app.post('/api/v1/signin',async(req,res) => {
          const {username, password} = req.body

          
          try{
                    const ExistingUser = await UserModel.findOne({
                              username,
                              
                    })
                    
                    if(ExistingUser){
                              const PasswordMatch = bcrypt.compare(password, ExistingUser.password)

                              if(!PasswordMatch){
                                        res.json({
                                                  error : 'incorrect password'
                                        })
                                        return
                              }

                              const token = jwt.sign({
                                        _id : ExistingUser._id
                              },JWT_PASSWORD)

                              res.json({
                                        token
                              })
                    }else{
                              res.json({
                                        error : 'invalid credentials'
                              })
                    }

          }
          catch(e){

                    res.json({
                              error : 'User do not  exist'
                    })
          }

          
})

app.post('/api/v1/content',userMiddleware,async (req,res) => {
          const {title,link,type} = req.body

          try{

                    const content = await ContentModel.create({
                              title,
                              link,
                              type,
                              //@ts-ignore
                              userId : req.userId
          
                    })
          
                    res.json({
                              message : 'Content posted!'
                    })
          }
          catch(e){

                    res.json({
                              error : 'Failed to post content'
                    })
          }


})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
          // @ts-ignore
          const userId = req.userId;
          console.log('userId: ', userId);

          try{
                    const content = await ContentModel.find({
                        userId: userId
                    })

                    if(!content){
                              res.json({
                                        message : "No content found"

                              })
                    }

                    res.json({
                        content
                    })

          }
          catch(e){
                    res.json({
                              e
                    })
          }
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
          const contentId = req.body.contentId;
      
          await ContentModel.deleteMany({
              contentId,
              //@ts-ignore
              userId: req.userId
          })
      
          res.json({
              message: "Deleted"
          })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
const share = req.body.share;

if (share) {

          try{
                    const existingLink = await LinkModel.findOne({
                              //@ts-ignore
                              userId: req.userId
                    });

                    if (existingLink) {

                              res.json({
                                        hash: existingLink.hash
                              })
                              return;
                    }

                    const hash = random(10);
                    await LinkModel.create({
                              //@ts-ignore
                              userId: req.userId,
                              hash: hash
                    })
          
                    res.json({
                              hash
                    })
          }
          catch(e){

                    res.json({
                              message: "Error"
                    })
          }


} else {

          try{

                    await LinkModel.deleteOne({
                               //@ts-ignore
                    userId: req.userId
                    });
                    res.json({
                    message: "Removed link"
                    })
          }
          catch(e){

                    res.json({
                              message: "Error deleting link"
                    })
          }
}
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
const hash = req.params.shareLink;

          try{

                    const link = await LinkModel.findOne({
                              hash
                    });
                    
                    if (!link) {
                              res.status(411).json({
                              message: "Sorry incorrect input"
                              })
                              return;
                    }

                    const content = await ContentModel.find({
                              userId: link.userId
                    })
                    
                    console.log(link);
                    const user = await UserModel.findOne({
                              _id: link.userId
                    })
                    
                    if (!user) {
                              res.status(411).json({
                              message: "user not found, error should ideally not happen"
                              })
                              return;
                    }

                    res.json({
                              username: user.username,
                              content: content
                    })
          }catch(e){

                    res.json({
                              message : 'error getting link'
                    })
          }



})

app.listen(4001,() =>{
          console.log('Server is running on port 4001')
})