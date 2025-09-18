import jwt from "jsonwebtoken";
import UserModel from "../Model/user.model.js";
export function verifyToken(req, resp , next){
  if(
    req.headers && 
    req.headers.authorization && 
    req.headers.authorization.split(" ")[0] === 'JWT'
  ){
    jwt.verify(
         req.headers.authorization.split(" ")[1],
         'secretkey',
         async function(err, verifedToken){
            if(err){
                return resp.status(403).json({message: "Invalid JWT Token"})
            }
           
          
           let user= await UserModel.findById(verifedToken.id);
           req.user= user;
         
            next();
         }
    )
       
    

  }
  else{
    return resp.status(404).json({message:"Token Not Found" })
  }
}
export default verifyToken;