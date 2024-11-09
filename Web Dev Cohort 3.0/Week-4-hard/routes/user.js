const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const {z} = require('zod')
const userMiddleware = require("../middleware/user");
const {UserModel,TodoModel} = require('../database/index')
const Secret_Key = 'dsjfshdjhfDFGwhaohgag'

router.post('/signup', async(req, res) => {
    const requiredBody = z.object({
        email : z.string().email(),
        password : z.string().min(5),
        username : z.string().min(4).max(20)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success){
        res.json({
            message : "Invalid format",
            error : parsedDataWithSuccess.error
        })
        return
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    let thrownError = false
    try{
        const hashedPassword = await bcrypt.hash(password,5)
        console.log(hashedPassword)

        await UserModel.create({
            username : username,
            email : email,
            password : hashedPassword
        })
    }catch(e){

        res.json({
            message: 'email already exist'
        })
        thrownError = true
    }

    if(!thrownError){
       
        res.json({
            message : "sign up successfully",
        })
    }
    
});

router.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password


    const user = await UserModel.findOne({
        email : email,
    })

    if(user){
        const PasswordMatch = await bcrypt.compare(password,user.password);

        if(PasswordMatch){

            const token = await jwt.sign({
                userId : user._id.toString()
            } , Secret_Key);

            console.log('login -> userId: ', user._id.toString());
            
            res.json({
                message : "sign in successfully",
                token : token
            })
        }else{
            res.json({
                message : 'incorrect password'
            })
        }
    }
    
    else{
        res.json({
            message : "User don't exist"
        })
    }
    

});

router.get('/todos', userMiddleware, async(req, res) => {
        const userId = req.userId
        console.log('todos-> userId: ', userId);

        try{
           
            todos = await TodoModel.find({
                userId : userId
            })

            if (!todos){
                res.json({
                    message : "No todos found"
                })
            }
            else{

                res.json({
                    todos: todos,
                    userId : userId
                
                })
            }
        } catch(e){

            res.json({
                message : `Error : ${e}`
            
            })
        }

});


router.post('/logout', userMiddleware, (req, res) => {


});

module.exports = router