import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prismaClient = new PrismaClient()


app.use(express.json())

app.get('/', async (req,res) => {
   const data = await prismaClient.user.findMany({})

    res.json({
        "data": data
    })
})

app.post('/', async(req,res) => {
    await prismaClient.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })

    res.json({
        "message": "user created successfully"
    })
})

app.listen(3000);