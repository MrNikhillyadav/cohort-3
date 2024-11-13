const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types

const User = new mongoose.Schema({
      username : String,
      email: { type: String, unique: true },
      password : String,
})

const Todo = new mongoose.Schema({
      title : String,
      description : String,
      isDone : Boolean,
      createdBy : ObjectId
})

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports ={
      UserModel,
      TodoModel
}