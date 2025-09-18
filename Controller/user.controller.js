import UserModel from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, resp){
try{
    const {userName, email, password} = req.body;
    let data = await UserModel.findOne({email})
    if(data){
       return resp.status(409).json({message: "email already exists"})
    }
    else{
       
    const newUser = await UserModel.create({userName,
         email, 
         password: bcrypt.hashSync(password, 10)
        });
    return resp.status(201).json(newUser)
    }

}
catch(err){
  return resp.status(500).json({message: "error while fetching data"})
}

}

export async function login(req, resp){
try{
     const { email, password} = req.body;
    let data = await UserModel.findOne({email})
    if(!data){
       return resp.status(409).json({message: "email does not exists"})
    }
  let validPassword =  bcrypt.compareSync(password, data.password);
  if(!validPassword){
    return resp.status(404).json({message: "Invalid Password"});
  }
    else{
         let token = jwt.sign({id: data._id},'secretkey',{expiresIn: "60m"});
        return resp.status(200).json({
            user: {
            email: data.email, 
            userName: data.userName 
            
            },
            accessToken: token
        })
    }

}
catch(err){
  return resp.status(500).json({message: "error while fetching data"})
}
}