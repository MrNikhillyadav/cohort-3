import express from "express"
import os from "os"
import cors from "cors"
import { start } from "repl";

export const app = express();
export const PORT=3000;

app.use(cors());
app.use(express.json())

app.get('/',(req,res) => {
    res.send("ok")
})

app.get('/host',(req,res) => {
    res.send(os.hostname())
})

app.get("/count", (req, res) => {
    let sum = 0;
    const startTime = Date.now();

    for (let i = 0; i < 10000000000; i++) {
        sum+= i;
    }

    const endTime = Date.now() 

    console.log(`time: ${endTime - startTime}`)
    console.log(`sum: ${sum}`)

    res.send(`sum: ${sum}`);
});

app.get('/cpus',(req,res) => {
    res.send(os.cpus().length)
})




