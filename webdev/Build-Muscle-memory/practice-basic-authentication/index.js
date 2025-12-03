const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require('./db');
const { string } = require('zod');
const {z} = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const middleware = require('./middleware')

const app = express()

app.use(express.json())
app.use(middleware)

app.get('/',(req,res) => {
    res.json({
        message : "healthy"
    })
})

app.post('/api/v1/signup',async(req,res) => {

    const userBody = z.object({
        username : z.string(),
        email : z.string().email(),
        password : z.string().min(4).max(16)
    })

    const parsedDataWithSuccess = userBody.safeParse(req.body)

    if (!parsedDataWithSuccess){

        res.json({
            message : "Invalid format",
            error : parsedDataWithSuccess.error
        })
        return;
    }   
    
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hash(password,10)
    console.log('hashedPassword: ', hashedPassword);

    const user = await UserModel.create({
        
        username,
        email,
        hashedPassword
    })

    res.json({
        message : "signed up successully!",
        user : user,
        
    })
})


app.post('/api/v1/signin',(req,res) => {
    const {username, password} = req.body;

    const decodedPassword = bcrypt.compare(password,user.password)

    if(decodedPassword){
        const token = jwt.sign({
            userId : user._id,
        }, 'JWT_SECRET')

        res.json({
            message : "logged in successully!",
            token : token   
        })
    }
    
    res.json({
        message : "password incorrect"
    })   
})

app.get("/todo",async(req,res) => {
    const userId = req.userId;
    
    const todos = await TodoModel.find({
        user_id  : userId
    })

    res.json({
        todos  : "todos"
    })
})

app.post("/todo",async(req,res) => {
    const {title, isDone, description} = req.body;

    const todo = await TodoModel.create ({
        title,
        isDone,
        description
    })

    res.json({
        todos  : "todos"
    })
})

app.delete("/:id",async(req,res) => {
    const todo_id = req.params.id;
    const user_id = req.userId

    try {
        await TodoModel.delete({
            _id : todo_id
        })

        res.json({
            message : "todo deleted !"
        })
    }
    catch(e){
        res.json({
            error : e.message
        })
    }
})


app.get('/',(req,res) => {

    res.json({
        message : "heathy"
    })
})

app.listen(4001, ()=>  {
    console.log('Port running on 4001')
})