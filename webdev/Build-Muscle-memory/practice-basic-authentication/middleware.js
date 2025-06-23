const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function middleware (req,res,next){
    const token = req.headers.token;
    hashedTokenData = await jwt.verify(token,JWT_SECRET)

    if(hashedToken){
        userId = hashedTokenData._id
    }
    
    next()

    res.json({
        error : "You are not logged in!"
    })
}

module.exports = middleware;