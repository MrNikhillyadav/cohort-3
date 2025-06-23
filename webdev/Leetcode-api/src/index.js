const express = require('express');
const cors = require('cors');
const leetcodeApi = require('./services/leetcode-api');
const apiLimiter = require('./middleware/rateLimit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiLimiter);

app.get('/api/health', async(req, res) => {
  res.json({
    message: "server is healthy",
    status: "up"
  });
});

app.get('/api/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getUserInfo(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Failed to fetch user info', details: error.message });
  }
});

app.get('/api/user/:username/problems', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getProblemsSolved(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching problems solved:', error);
    res.status(500).json({ error: 'Failed to fetch problems solved', details: error.message });
  }
});

app.get('/api/user/:username/submissions', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getSubmissions(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions', details: error.message });
  }
});

app.get('/api/user/:username/active-years', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getActiveYears(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching active years:', error);
    res.status(500).json({ error: 'Failed to fetch active years', details: error.message });
  }
});

app.get('/api/user/:username/contests', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getContestsAttended(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching contests:', error);
    res.status(500).json({ error: 'Failed to fetch contests', details: error.message });
  }
});

app.get('/api/user/:username/badges', async (req, res) => {
  try {
    const { username } = req.params;
    const data = await leetcodeApi.getUserBadges(username);
    res.json(data);
  } catch (error) {
    console.error('Error fetching badges:', error);
    res.status(500).json({ error: 'Failed to fetch badges', details: error.message });
  }
});

// Apply error handler as the last middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});