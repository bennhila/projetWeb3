const User = require('../models/userSchema')
const dotenv = require('dotenv')
const { json } = require('express')
const bcrypt = require('bcrypt');
var jwt= require('jsonwebtoken')
dotenv.config()
const userController = {
     register:async(req,res)=>{
        const {email,name,password,confirmPassword,telephoneNumber}=req.body
        if (!email || !password || !name ||!confirmPassword||!telephoneNumber)
        return res.status(400).json({message:'missed information'})
        const user = await User.findOne({email:email})
        if (user)
        return  res.status(400).json({massage:"user already created"})
        if(password.localeCompare(confirmPassword)!=0)
        return res.status(400).json({message:"password not confirmed"})
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newuser=await User.create({ telephoneNumber:telephoneNumber, name:name ,email:email,password:hash})
        if (!newuser)
        return res.status(400).json({message:'user not created'})
        return res.status(200).json({_id:newuser._id,email:newuser.email, name:newuser.name ,telephoneNumber:newuser.telephoneNumber  , token:genToken(newuser._id,newuser.name ,newuser.email,newuser.password,newuser.telephoneNumber ), message:"user created"})
    },
    login:async(req,res)=>{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({msg:'Please enter all fields'})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'email does not exist'})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:'password is incorrect'})
        }
        return res.status(200).json({_id:user._id,email:user.email, name:user.name , token:genToken(user._id,user.name ,user.email,user.password), message:"log in"})
    },
}
const genToken =(id,name,email)=>{
    return jwt.sign({_id:id,name:name,email:email} , process.env.JWT_SECRET )
    }
module.exports = userController