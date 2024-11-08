const Secret_Key = 'dsjfshdjhfDFGwhaohgag'
const jwt = require('jsonwebtoken')

function userMiddleware (req, res, next) {
    const token = req.headers.token;
    
    const decodedResponseObj =  jwt.verify(token,Secret_Key);

     if(decodedResponseObj){
            req.userId  = decodedResponseObj._id 
            next()
      }else{
            res.json({
                  message : 'You are not logged in'
            })
      }
}

module.exports = userMiddleware;