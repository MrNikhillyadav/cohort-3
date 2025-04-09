const express  = require('express')
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.get("/",(req,res) => {

    res.json({
        message : "server is healthy"
    })
})

app.get('/ws',(req,res) => {

    res.json({
        message : "/ws api endpoint "
    })
})

app.listen(4001,() => {
    console.log('http server listening on  port 4001');
})