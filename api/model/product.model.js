const mongoose = require('mongoose');
const faker = require('faker');
const productData = require('../router/product.router');


//create schema for product
const productSchema = new mongoose.Schema({
    product: String,
    color: String,
    productMaterial:String,
    price: Number
});

const ProductModel = mongoose.model('product', productSchema);

/* GET ALL PRODUCTS */
exports.getAllProducts = async (req, res) => {
    const result = await ProductModel.find();
    res.json(result);
}

  /* GET SINGLE PRODUCT BY ID */
  exports.getProduct = (req, res, next) => {
    ProductModel.findById(req.params.id,  (err, result) => {
        if (err) return next(err);
        res.json(result);
      });
    }

  /* ADD PRODUCT */
  exports.addProduct = (req, res, next) => {
    ProductModel.create(req.body, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
  }

  /* UPDATE PRODUCT */
  exports.updateProduct = (req, res, next) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
 }

  /* DELETE PRODUCT */
  exports.deleteProduct = (req, res, next) => {
    ProductModel.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
  }








