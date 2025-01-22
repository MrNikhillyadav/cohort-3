import express from 'express'
import { Client } from "pg";

const app = express()
app.use(express.json())

const pgClient = new Client ("postgresql://neondb_owner:xaGAHgN4r7kv@ep-long-salad-a5qeycnx.us-east-2.aws.neon.tech/neondb?sslmode=require")
pgClient.connect();

app.post('/signup', async(req,res) =>{
        const {username,email,password} = req.body;

        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3);`
        const response = await pgClient.query(insertQuery,[username,email,password])

        res.json({
                message : 'You are signed up successfully',
        })
})

app.get('/users' , async(req,res) => {
        const response = await pgClient.query('SELECT * FROM users')

        res.json({
                users : response.rows
        })
})

app.listen(3000, () => {
        console.log('Port listening at Port 3000')
})




