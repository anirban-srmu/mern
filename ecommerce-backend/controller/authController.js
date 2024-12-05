
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const registerUser = async (req,res) =>{
    try {
        const{name,email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        const newUser = new User({name,email,password});
        await newUser.save();
        res.status(201).json({message : "User registered sucessfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const loginUser = async (req,res) =>{
    try{
        const {email,password}= req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = jwt.sign({id: user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {registerUser,loginUser};