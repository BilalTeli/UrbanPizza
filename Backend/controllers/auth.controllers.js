import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

const signUp=async(req,res)=>{
    try{
        const {fullName,email,password,mobile,role}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        if(password.length<6)
        {
            return res.status(400).json({message:"password must be of six characters"})
        }
        if(mobile.length<10){
            return res.status(400).json({message:"mobile number must be of 10 digits"})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hashedPassword
        })
    }
    catch(error)
    {
        console.log("error")   
    }
}