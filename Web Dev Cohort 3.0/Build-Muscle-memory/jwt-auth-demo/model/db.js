const mongoose = require('mongoose');
const ObjectId =  mongoose.Schema.ObjectId;

const User = new mongoose.Schema(
    {   
        username : String,
        email : {
            type : String,
            required: true

        },
        password: {
            type : String,
            required: true
        }
    }
)

const Todo = new mongoose.Schema({
    _id : ObjectId,
    title : String,
    description : String,
    isDone : Boolean
})


const UserModel = mongoose.model("users",User);
const TodoModel = mongoose.model("todos",Todo);

module.exports = {UserModel,TodoModel};