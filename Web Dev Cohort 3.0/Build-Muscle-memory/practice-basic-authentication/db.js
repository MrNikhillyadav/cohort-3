const express = require('express')
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const User = new mongoose.Schema({
    _id : ObjectId,
    username : String,
    password : String,
    email : { type : String, unique : true},

})

const Todos = new mongoose.Schema({
    user_id: ObjectId,
    title : String,
    isDone : Boolean,
    description : String
})

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos",Todos)

module.exports = {
    UserModel,
    TodoModel
}