import express from "express";

const app = express();

app.get('/health',(req,res) => {
    res.json({
        msg : 'Hi there!'
    })
})

app.get("/cpu", (req, res) => {
	for (let i = 0; i < 100000000; i++) {
		Math.random();
	}
	res.send("Hello world");
});

app.listen(4000)