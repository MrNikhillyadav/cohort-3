const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


function authMiddleware(req,res, next){
    const token = req.headers.token;
    try{
        if(!token){
            res.json({
                message : "token not found"
            })
        }
    
        const decodedPayload = jwt.verify(token, "JWT_SECRET");
        console.log("decodedPayload: ", decodedPayload);
    
        if(!decodedPayload){
            res.json({
                message : "Invalid Token"
            })
            return;
        }
        
        req.userId = decodedPayload.id;
        next();
    }
    catch(e){
        res.json({
            message : "Internal Server error"
        })
    }

}

module.exports = {
    authMiddleware
}