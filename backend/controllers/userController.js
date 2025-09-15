const express = require("express")
const asynchandler = require("express-async-handler")
const User = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const loginUser = asynchandler(async (req,res) =>{
      const {email,password} = req.body;
      if(!email || !password){
        return res.status(400).json({message: "All Details are Mandatory"})
      }
      // finding the user by unique email
      const user = await User.findOne({ email })
      // comparing hash password with the password
      const result = await bcrypt.compare(password,user.password)
      // jwt used to provide authentication
      if(user && result){
        const accesstoken = jwt.sign({
        user:{
            name: user.name,
            email: user.email,
            id: user.id,
        },
      },process.env.PRIVATE_SECRET_KEY ,{ expiresIn: "1h" }
    )
     return res.json({accesstoken})
    }else{
        res.status(400)
        res.json({message: "invalid password"})
      }
     

          
})


const registerUser = asynchandler(async (req,res) =>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400)
        res.json({message: "Please Enter the Details"})
    }
    // If user already register
    const result = await User.findOne({email})
    if(result){
      res.status(400)
      res.json({message:"User Already Registered Try new Account to registered"})
    }
    //hash password
    const hashPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        name,
        email,
        password: hashPassword,
    })
    res.json({_id: user.id, email: user.email})
})


const currentUser = asynchandler(async (req,res) =>{
    res.json(req.user)
})











module.exports = {loginUser,currentUser,registerUser}