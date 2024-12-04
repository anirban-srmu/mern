const Product = require("../models/productModel");

exports.createProduct = async (req,res) => {
    try{
        const {name,description,price,imageUrl,category,stock}= req.body;
        const newProduct = new Product({name, description,price,imageUrl,category,stock});
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch(error){
        res.status(400).json({message: error.message});
    }
};

exports.getAllProducts = async (req,res) =>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    } 
};