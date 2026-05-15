const express = require("express");
const { TodoModel } = require("../models/todoModel.js");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")

const todoRouter = express.Router();

todoRouter.post('/create', async(req,res) => {
    const {title , done}  = req.body;
    console.log("req.userId: ", req.userId);

    try{
        const todo = await TodoModel.create({
            title,
            done,
            createdBy: req.userId
        })

        if(!todo){
            res.json({
                message : "todo not created"
            })
            return;
        }

        res.json({
            message : "todo created"
        })
    }
    catch(e){
        
        res.json({
            error : "Internal Server error"
        })
    }

})

todoRouter.get('/alltodos', async(req,res) => {
    try{
        const todoId = req
        const todos = await TodoModel.find({
            createdBy : req.userId
        })

        console.log("todos: ", todos);
    
        if(todos.length == 0){
            res.json({
                message : "no todos found"
            })
        }

        res.status(200).json({
            todos 
        })

    }
    catch(e){

        res.status(500).json({
            error : "Internal Server error"
        })
    }

})

todoRouter.get('/:id', async(req,res) => {
    const todoId = req.params.id;

    try{
        const todo = await TodoModel.find({
            _id : todoId,
            createdBy : req.userId
        })

        console.log("todo: ", todo);
    
        if(!todo){
            res.status(404).json({
                message : "todos not found"
            })
        }

        res.status(200).json({
            todo
        })

    }
    catch(e){

        res.status(500).json({
            error : "Internal Server error"
        })
    }

})

module.exports = {
    todoRouter
}