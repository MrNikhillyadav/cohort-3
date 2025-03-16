// src/index.js
const express = require('express');
const cors = require('cors');
const leetcodeApi = require('./services/leetcode-api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const errorHandler = require('./middleware/errorHandler');

app.use(errorHandler);

app.get('/api/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getUserInfo(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Failed to fetch user info' });
  }
});

app.get('/api/user/:username/problems', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getProblemsSolved(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching problems solved:', error);
    res.status(500).json({ error: 'Failed to fetch problems solved' });
  }
});

app.get('/api/user/:username/submissions', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getSubmissions(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

app.get('/api/user/:username/active-years', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getActiveYears(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching active years:', error);
    res.status(500).json({ error: 'Failed to fetch active years' });
  }
});

app.get('/api/user/:username/contests', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getContestsAttended(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching contests:', error);
    res.status(500).json({ error: 'Failed to fetch contests' });
  }
});

app.get('/api/user/:username/badges', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getUserBadges(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching badges:', error);
    res.status(500).json({ error: 'Failed to fetch badges' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});