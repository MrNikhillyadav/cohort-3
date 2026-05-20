const express = require("express");
const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken")

const userRouter = express.Router();

userRouter.post('/signup', async(req,res) => {
    const {email , password}  = req.body;

    console.log("email:", email);
    console.log("password:", password);


    const existingUser = await UserModel.findOne({
        email
    })

    if(existingUser){
        res.status(409).json({
            message : "email already exist"
        })
        return;
    }

    if(password.length < 4){
        res.status(400).json({
            message : "password too short"
        })
        return;
    }

    const hashedPassword = await bcrypt.hash(password,4);
    console.log("hashedPassword:", hashedPassword);

    try{
        const user = await UserModel.create({
            email,
            password : hashedPassword
        })
    
        if(!user){
            res.json({
                message : "user not created"
            })
        }

        res.status(200).json({
            message : "signed up successfully"
        })
    }
    catch(e){
        
        res.status(500).json({
            error : "Internal Server error"
        })
    }

})

userRouter.post('/signin', async(req,res) => {
    const {email , password}  = req.body;

    try{
        const user = await UserModel.findOne({
            email
        })

        console.log("user: ", user);
    
        if(!user){
            res.status(404).json({
                message : "user does not exist"
            })
        }

        let isMatching = await bcrypt.compare(password, user.password);

        if(!isMatching){
            return res.json({
                message : "Invalid Crendentials"
            })
            
        }

        const token = await jwt.sign({
            id: user._id.toString()
        },"JWT_SECRET")

        res.status(201).json({
            message : "Signed in successful",
            token : token
        })

    }
    catch(e){

        res.status(500).json({
            error : "Internal Server error"
        })
    }

})

module.exports = {
    userRouter
}