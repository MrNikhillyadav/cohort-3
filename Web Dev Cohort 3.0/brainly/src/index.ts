import express from 'express';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
// import {UserModel} from 

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

app.post('/api/v1/signin',(req,res) => {

})

app.post('/api/v1/content',(req,res) => {

})

app.get('/api/v1/content',(req,res) => {

          res.json({
                    "status": 200,
                    "message": "Content fetched successfully",
          })
})

app.delete('/api/v1/content',(req,res) => {

})

app.post('/api/v1/brain/share',(req,res) => {

})

app.get('/api/v1/brain/:shareLink',(req,res) => {

})

app.listen(4001,() =>{
          console.log('Server is running on port 4001')
})