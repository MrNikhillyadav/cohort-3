// src/services/cache.js
const NodeCache = require('node-cache');

// Cache data for 5 minutes
const cache = new NodeCache({ stdTTL: 300 });

module.exports = cache;