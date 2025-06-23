const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt')
const {UserModel,TodoModel} = require('./model/url')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

function authMiddleware(req,res,next){
    const token = req.headers.token;
    const decodeResponse = jwt.verify(token,"Jwt_secret" )

    if(decodeResponse){
        req.userId = decodeResponse.id
        next();

    }else {

        res.json({
            message : "You are not logged in"
        })
    }
}

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://nikyadav20032003:e0u1Gam4rdA2ap6f@cluster0.orazjtw.mongodb.net/todo')
.then(() => console.log('Db connected!'))
.catch((e) =>console.log(  `error :`,e) )


app.get('/', (req,res) => {

    res.json({
        message : "server is healthy"
    })
})



app.post('/api/v1/signup',async(req,res) => {
    const {username, password,email} = req.body;
    
    const Hashedpassword = await bcrypt.hash(password,10)
    console.log('hashedPassword: ', Hashedpassword);

    const user = await UserModel.create({
        username : username,
        email : email,
        password : Hashedpassword
    })

    res.json({
        message : "signed up successfully",
        Hashedpassword : Hashedpassword
        
    })
})

app.post('/api/v1/signin',async (req,res) => {
    const {password,email} = req.body

    const user = await UserModel.findOne({
        email,

    })

    if(!user){

        res.json({
            error : "User does not exist!"
        })
    }

    const hashedPassword = await bcrypt.compare(password,user.password)

    if(hashedPassword){

         token = jwt.sign({
            id : user._id

        },"Jwt_secret")
    }


    res.json({

        message : "logged in successfully",
        token : token
    })
})


app.get('/api/v1/todo',authMiddleware, (req,res) => {

    res.json({
        message : "todos"
    })
})



app.listen(4001,() => {console.log('Server Started')})