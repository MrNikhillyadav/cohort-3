
const Jwt_Admin_Password = 'dsjfshdjhfDFGwhaohgag'
const jwt = require('jsonwebtoken')


function adminMiddleware (req, res, next) {
      const token = req.headers.token;    
      
      const decodedResponseObj =  jwt.verify(token,Jwt_Admin_Password);
  
       if(decodedResponseObj){
              req.userId  = decodedResponseObj.userId 
              console.log('Admin -> userId : ', req.userId );
  
              next()
        }else{
              res.json({
                    message : 'You are not logged in',
                    userId : req.userId,
              })
        }
  }
  
  module.exports = {
      adminMiddleware: adminMiddleware
  }