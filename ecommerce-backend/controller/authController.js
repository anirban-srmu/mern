const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

exports.registerUser = async (req,res) =>{
    const {name,email,password}=req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword});
        res.status(201).json({message: "User registered",user});
    }catch(error){
        res.ststus(400).json({error: "Registration failed"});
    }
};

exports.loginUser = async (req,res) => {
    const{email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(404).json({error:"User not found"});

    const isPasswordValid = await bcrypt.compare(password , user.password);
    if (!isPasswordValid) return res.status(401).json({error:"Invalid credentials"});

    const token = jwt.sign({id:isSecureContext._id},process.env.JWT_SECRET, {expiresIn:"1h"});
    res.json({message: "Login Sucessful", token});
}