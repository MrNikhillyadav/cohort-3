const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const todoRouter = require('./routes/todo')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todo')
.then(()=> console.log('connected to Db'))

app.get('/',(req,res) =>{
      res.json({
            message: 'Welcome'
      })
})

app.use('/user', userRouter);
app.use('/user/todo', todoRouter);


app.listen(4001,function() {
      console.log('Server is running on port 4001')
})