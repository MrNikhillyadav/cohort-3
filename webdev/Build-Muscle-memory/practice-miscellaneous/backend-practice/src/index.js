import express from 'express';
import { UserModel } from './models/models';

const app = express();
app.use(express.json())

app.get('/',(req,res) => {
  res.status(200).json({
    message : "server is healthy"
  })
})

app.use('/api/v1/users', userRouter);

app.listen(3000,() => {
  console.log("server is running on port 3000");
})