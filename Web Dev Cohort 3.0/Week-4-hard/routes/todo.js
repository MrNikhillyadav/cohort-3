const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const {UserModel,TodoModel} = require('../database/index')
const router = Router();

router.post('/', async(req, res) => {
    
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId

    try {
        const newToDo = await TodoModel.create({
            userId,
            title ,
            done ,
        })

        res.json({
            message : "added todo ",
            newTodo : newToDo.title
        })
    }catch(e){
        res.status(403).json({
            message : "error creating  new todo"
        })
    }

   
});

router.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;