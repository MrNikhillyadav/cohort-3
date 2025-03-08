import express from "express";
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> {
    res.status(200).json({
        message : "Hi there"
    })
})

app.post('/api/v1/signup', async(req,res) =>{
    const {username, password} = req.body;
    //TODO : ADD ZOD VALIDATION
    
    try{   
        const user = await UserModel.create({
            data : {
                username,
                password
            }
        })

        res.status(200).json({
            msg : 'signed up successfully'
        })

    }
    catch(e){
        console.log(e)
    }

   
    
})

app.post('/api/v1/login', async(req,res) =>{
    const {username, password} = req.body;

    try{
        const user = await UserModel.findOne({
            username,
            password
        })

        if(user){
            const token = jwt.sing({
                id : user._id
            },JWT_SECRET)

            res.json({
                token
            })
        }
        else{
            res.status(403).json({
                msg: "Incorrect credentials"
            })
        }
    }catch(e){
        
        console.log(e)
    }
})

app.listen(4000,()=>{
    console.log('listening on port 4000')
})