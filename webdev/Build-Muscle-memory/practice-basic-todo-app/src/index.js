const cors = require("cors");
const express = require("express");
const { mongoose } = require("mongoose");
const { userRouter } = require("./routes/userRouter");
const { todoRouter } = require("./routes/todoRouter");
const {authMiddleware} = require("./middleware/authMiddleware")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://test:test@cluster0.oz52trp.mongodb.net/todo-app")
.then(() => {
    console.log("connected");
})
.catch((e) => {
    console.error("error connecting to db");
})



app.get('/',(req, res) => {
    res.status(200).json({
        message : "Server is healthy"
    })
})

app.use("/api/v1/user",userRouter);
app.use("/api/v1/todo",authMiddleware, todoRouter);

app.listen(3000, (req,res) => {
    console.log("server running on port 3000")
})