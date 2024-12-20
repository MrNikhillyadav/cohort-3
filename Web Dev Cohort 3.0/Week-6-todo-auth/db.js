const mongoose = require('mongoose')
const Schema = mongoose.Schema; //returns a schema class
const ObjectId = Schema.ObjectId;  

const User = new Schema({
      username : String,
      email: {type: String, unique: true},
      password : String
})

const Todo = new Schema({
      userId : String,
      title : String,
      done : Boolean
})

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos', Todo)

module.exports = {
      UserModel,
      TodoModel
}
