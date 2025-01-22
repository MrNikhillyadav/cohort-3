import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express()
app.use(express.json())
const client = new PrismaClient();

// create a user
async function createUser(){

        const user = await client.user.create({
                      data : {
                        username : "KL Rahul",
                        password : "12345",
                        age : 26,
                        city : "Pune"
                      }  
                })

}

// update a user
async function updateUserWithId(){

        const user = await client.user.update({
                      where : {
                        id : 1
                      },
                      data : {
                        age : 20
                      }   
                })

}

// using include , getting todos using relationships
async function getuser(){
        const user = await client.user.findFirst({
                where : {
                        id : 2
                },
                include : {
                        todos : true
                }
        })
        console.log(user)
}

// use select to choose what properties you want
async function getUser2(){
        const user = await client.user.findFirst({
                where : {
                        id : 1
                },
                select : {
                        username : true
                }
        })
        console.log(user?.username)
}

app.get('/users',async(req,res) =>{
        const users = await client.user.findMany({});

        res.json({
                users
        })
})

app.get('/user/todos/:userId', async(req,res) =>{
        const id = req.params.userId; // "2" id is string, convert into int as defined in schema

        const userWithAllTodos = await client.user.findFirst({
                where :{
                        id : Number(id)
                },
                select : {
                        todos : true,
                        username  : true,
                        password : true
                }
                
              
        })
        res.json({
                userWithAllTodos
        })
})


app.listen(3000)

