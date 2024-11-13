const { Router } = require("express");
const {adminMiddleware} = require("../middleware/admin");
const userMiddleware = require("../middleware/user");
const {UserModel,TodoModel} = require('../database/index');

const router = Router();

router.post('/', userMiddleware, async(req, res) => {
    const {title,done} = req.body;
    const userId = req.userId;
    console.log('todo-> userId: ', userId);

    try {  
        const newToDo = await TodoModel.create({
            todoId : userId,
            title : title,
            done : done,
        })

        res.json({
            message : "added todo ",
            newTodo : newToDo.title,
            todoId : userId ,
            _id : newToDo._id  //newly-created //57min left Week-8 offline
        })
    }catch(e){
        res.status(403).json({
            message : "error creating  new todo"
        })
    }  
});

router.put('/', adminMiddleware, async(req, res) => {
    const adminId = req.userId;
    console.log('adminId: ', adminId);
    const {title,done,todo_id } = req.body;

    try{
        await TodoModel.updateOne({
                _id : todo_id,
                todoId : adminId
        },{
            title : title,
            done : done,
        })

    }catch(e){
        res.json({
            message : 'error in updating todo'
        })
    }

    res.json({
        message : "update todo" ,
        _id : todo_id
    })
 
});

router.delete('/', adminMiddleware, async(req, res) => {
    // Implement delete todo logic
    const {todo_id} = req.body;

    try{
        await TodoModel.deleteOne({
            _id : todo_id,
        })

    }catch(e){
        res.json({
            message : 'error in deleting todo'
        })
    }

    res.json({
        message : "deleted todo" 
    })
});

router.delete('/:id', adminMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const todo_id = req.params.id;
    const adminId = req.userId

    try{
        await TodoModel.findByIdAndDelete({
            _id : todo_id,
            todoId : adminId
        })

    }catch(e){
        res.json({
            message : 'error in deleting todo'
        })
    }
    res.json({
        message : "deleted todo " ,
        _id : todo_id   
    })
});


router.get('/', adminMiddleware, async(req, res) => {
    // Implement fetching all todo logic
    const adminId = req.userId;
    const todos = await TodoModel.find({});

    res.json({
        todos : todos
    })

});

router.get('/:id', adminMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
    const todo_id = req.params.id;
    const adminId = req.userId  ;

    const todo = await TodoModel.findById({
        _id : todo_id,
        todoId : adminId
    });

    res.json({
        todo : todo
    })


});

module.exports = router;