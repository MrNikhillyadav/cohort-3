const Secret_Key = 'dsjfshdjhfDFGwhaohgag'
const jwt = require('jsonwebtoken')

function userMiddleware (req, res, next) {
    const token = req.headers.token;    
    console.log('Auth-token: ', token);
    
    const decodedResponseObj =  jwt.verify(token,Secret_Key);

     if(decodedResponseObj){
            req.userId  = decodedResponseObj.userId 
            console.log('Auth -> userId : ', req.userId );

            next()
      }else{
            res.json({
                  message : 'You are not logged in'
            })
      }
}

module.exports = userMiddleware;