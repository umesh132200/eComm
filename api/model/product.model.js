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
exports.getAllProducts = function(req, res, next) {
  ProductModel.find(function (err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }

  /* GET SINGLE PRODUCT BY ID */
  exports.getProduct = function(req, res, next) {
    ProductModel.findById(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
      });
    }

  /* ADD PRODUCTS */
  exports.addProduct = function(req, res, next) {
    ProductModel.create(req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
  }

  /* UPDATE PRODUCTS */
  exports.updateProduct = function(req, res, next) {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
 }

  /* DELETE PRODUCTS */
  exports.deleteProduct = function(req, res, next) {
    ProductModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
  }








