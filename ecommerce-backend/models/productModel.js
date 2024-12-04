const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type: String,require:true},
    price: {type:Number, required: true},
    stock:{type:Number, default: 0},
    imageUrl:{type:String},
    category:{type:String, required: true},

});

module.exports = mongoose.model("Product", productSchema);
//module.exports = Product;
