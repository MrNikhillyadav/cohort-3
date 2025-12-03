import Jwt from 'jsonwebtoken';

export async function authMiddleware(req,res,next){
  const token = req.headers.token;
  try{
    const decodedPayload =  Jwt.verify(token, "JWT_SECRET_KEY");
    if (!decodedPayload){
      res.status(401).json({
        message : "Unauthorized"
      })
    }
    req.user = decodedPayload.id;
    next()
  }catch(err){
    res.status(401).json({
      message : "Unauthorized"
    })
  }
}