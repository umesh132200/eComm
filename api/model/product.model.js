const mongoose = require('mongoose');
const faker = require('faker');
const productData = require('../router/product.router');
 
//create schema for product
const productSchema = new mongoose.Schema({
    product: String,
    color: String,
    productMaterial:String,
    price: Number,
    photoRef:String
});

const ProductModel = mongoose.model('product', productSchema);

/* GET ALL PRODUCTS */
exports.getAllProducts = async (req, res) => {
    const result = await ProductModel.find();
   res.json(result);
}

/* GET SINGLE PRODUCT BY ID */
exports.getProduct = async (req, res) => {
    const result = await ProductModel.findById(req.params.id);
    res.json(result);
}

/* ADD PRODUCT */
exports.addProduct = async (req, res) => {
    const result = await ProductModel.create(
        {
            product: req.body.product,
            color: req.body.color,
            productMaterial:req.body.productMaterial,
            price: req.body.price,
            photoRef: req.file.path
            
        });
    res.json(result);
}

/* UPDATE PRODUCT */
exports.updateProduct = async (req, res) => {
    const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
}

/* DELETE PRODUCT */
exports.deleteProduct = async (req, res) => {
    const result = await ProductModel.findByIdAndRemove(req.params.id);
    res.json(result);
}








