const Product = require("../models/productModel");

exports.createProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({message: "Product created!", product});
    } catch(error){
        res.status(400).json({error:"Product creation failed"});
    }
};

exports.getProducts = async (req,res) =>{
    const products = await Product.find();
    res.json(products);
};