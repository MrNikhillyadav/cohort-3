const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hard-todo')
.then ( () =>  console.log('MongoDB connected!') )
.catch((err) => console.log('Mongo err:', err))

// Define schemas

const UserSchema = new mongoose.Schema({
    username : String,
    email: {type: String, unique: true},
    password : String
});

const TodoSchema = new mongoose.Schema({
    todoId : ObjectId,
    title : String,
    done : Boolean
});

const UserModel = mongoose.model('user', UserSchema);
const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = {
    UserModel,
    TodoModel
}