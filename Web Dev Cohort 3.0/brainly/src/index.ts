import express from 'express';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { ContentModel, UserModel } from './db/model';
import { populate } from './../node_modules/dotenv/lib/main.d';
import { userMiddleware } from './userMiddleware';
import { JWT_PASSWORD } from './config';

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/brainly")
.then(() =>  console.log('db connected'))

app.post('/api/v1/signup',async(req,res) => {
          const {username, password} = req.body
          //TODO : Zod validation | password hash

          try{
                    const user = await UserModel.create({
                              username,
                              password
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
                              password
                    })

                    if(ExistingUser){
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


})

app.get('/api/v1/content',userMiddleware,async(req,res) => {
          //@ts-ignore
          const userId = req.userId ;

          const content = await ContentModel.find({
                    userId : userId
          })

          res.json({
                    content
          })
})

app.delete('/api/v1/content/:id',userMiddleware,async(req,res) => {
          const contentId = req.params.id;

          const deleted = await ContentModel.deleteOne({
                    contentId,
                    //@ts-ignore
                    userId : req.userId
          })

          res.json({
                    message : 'Content deleted!',
                    deleted
          })
})

app.post('/api/v1/brain/share',(req,res) => {

})

app.get('/api/v1/brain/:shareLink',(req,res) => {

})

app.listen(4001,() =>{
          console.log('Server is running on port 4001')
})