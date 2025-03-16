// src/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    
    res.status(err.statusCode || 500).json({
      error: {
        message: err.message || 'Internal Server Error',
        status: err.statusCode || 500
      }
    });
  }
  
  module.exports = errorHandler;