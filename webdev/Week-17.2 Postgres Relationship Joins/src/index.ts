import express from 'express'
import { Client } from "pg";

const app = express()
app.use(express.json())

const pgClient = new Client ("postgresql://neondb_owner:xaGAHgN4r7kv@ep-long-salad-a5qeycnx.us-east-2.aws.neon.tech/neondb?sslmode=require")
pgClient.connect();

app.post('/signup', async(req,res) =>{
        const {username ,email,password} = req.body;
        const {city,country,street,pincode} = req.body

        try{
                const insertUserQuery = `INSERT INTO users (username,email,password)  VALUES ($1,$2,$3) RETURNING id;`

                await pgClient.query("BEGIN;")
                const response = await pgClient.query(insertUserQuery,[username,email,password])
                const userId = response.rows[0].id;
        
                const addressQuery =  `INSERT INTO addresses (user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5)`
                const addressQueryResponse = await pgClient.query(addressQuery,[userId,city,country,street,pincode])
        
                await pgClient.query("COMMIT;")
        
                res.json({
                        message : 'You are signed up successfully',
                })

        }
        catch(e){

                res.json({
                        error : e
                })
        }

      
})

app.get('/users',async(req,res)=>{
        const users = await pgClient.query('SELECT * FROM users')

        res.json({
                users : users.rows
        })
})

app.get('/metadata', async(req,res) => {
        const id = req.query.id;
        console.log('id: ', id);

        try{
                const query1 = `SELECT username,email,id FROM users WHERE id=$1`;
                const response1 = await pgClient.query(query1, [id]);
        
                const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
                const response2 = await pgClient.query(query2, [id]);
        
                res.json({
                        user : response1.rows[0],
                        address : response2.rows 
                })
        }
        catch(e){

                res.json({
                        error : e
                })
        }

       

})

app.get('/better-metadata',async(req,res) => {
        const id = req.query.id;

        try{

                const query = `SELECT users.username,users.email,users.id,addresses.city,addresses.country,addresses.pincode,addresses.street 
                FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`;
        
                const response = await pgClient.query(query, [id])
        
                res.json({
                        response : response.rows,
                        
                })
        }
        catch(e){
                res.json({
                        error : e
                        })
        }
})



app.listen(3000, () => {
        console.log('Port listening at Port 3000')
})




