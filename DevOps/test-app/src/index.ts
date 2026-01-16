import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './model.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testdb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password
        })


        if(!user) {
            return res.status(400).send({ error: 'Error creating user' });
        }

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).send({ error: 'Error creating user' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).send({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }   
});

app.get('/all-users', async (req, res) => {
    try {
        const users = await User.find({});
        console.log("users", users);
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});