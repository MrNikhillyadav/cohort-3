const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User_Secret = 'ahdfhehfaffedvs'

async function authMiddleware(req,res,next){
      const token = req.headers.token;

      const decodedDataPayload = await jwt.verify(token,User_Secret )
      console.log('decodedDataPayload: ', decodedDataPayload);

      if(decodedDataPayload){
            req.userId = decodedDataPayload.userId
      }

      next()
    
}


module.exports = authMiddleware