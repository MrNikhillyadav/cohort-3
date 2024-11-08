const express = require("express");
const dotenv = require("dotenv");
const userRouter = require('./routes/user');
const todoRouter = require('./routes/todo');

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/healthy", (req, res)=> res.json({message : "I am Healthy"}));

app.get('/',(req,res) =>{
      res.json({
            message : 'Welcome'
      })
})

app.use('/user',userRouter)
app.use('/user/todo',todoRouter)

app.listen(port,function(){
      console.log('Running at port 4001')
});

