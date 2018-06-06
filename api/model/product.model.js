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

//to save product in mongo
const saveProduct = new ProductModel({
  product: productData.product || faker.commerce.product(),
  color: productData.color ||faker.commerce.color(),
  productMaterial: productData.productMaterial ||faker.commerce.productMaterial(),
  price: productData.price || faker.commerce.price()
    //  product:productData.product,
    //  color: productData.color,
    //  productMaterial: productData.productMaterial,
    //  price: productData.price
});

async function saveResult() {
    try{
      return await saveProduct.save();
    }
    catch(err) { console.log(err);}
}
 saveResult();//save product

//to get product from db
  async function getProduct() {
  return await ProductModel.find();
  
}

const result = getProduct();

  async function deleteProduct() {
    
  };

exports.result = result;


