import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { ContentModel, LinkModel, UserModel } from './db/model';
import { userMiddleware } from './userMiddleware';
import { JWT_PASSWORD, random } from './config';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())

app.use(cors())

//@ts-ignore
mongoose.connect(process.env.MONGO_URL)
.then(() =>  console.log('db connected'))

app.get('/',(req,res) =>{
    res.json({
        msg : 'Hello world'
    })
})
app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await UserModel.create({
            username: username,
            password: password
        }) 

        console.log(user)
        res.json({
            
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrrect credentials"
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

app.listen(3000,() =>{
          console.log(`server is listening on PORT 3000}`)
})
