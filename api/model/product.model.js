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
  products.create(req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
  }

  /* UPDATE PRODUCTS */
  exports.updateProduct = function(req, res, next) {
  products.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
 }

  /* DELETE BOOK */
  exports.deleteProduct = function(req, res, next) {
    ProductModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
  }

  //exports.products = ProductModel;
// //to save product in mongo
// const saveProduct = new ProductModel({
//   product: productData.product || faker.commerce.product(),
//   color: productData.color ||faker.commerce.color(),
//   productMaterial: productData.productMaterial ||faker.commerce.productMaterial(),
//   price: productData.price || faker.commerce.price()
// });

// async function saveResult() {
//     try{
//       return await saveProduct.save();
//     }
//     catch(err) { console.log(err);}
// }
//  saveResult();//save product

// //to get product from db
//   async function getProduct() {
//   return await ProductModel.find();
  
// }

// const result = getProduct();








