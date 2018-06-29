const express = require('express');
const router = express.Router();
const { result } = require('../model/product.model');
const { getProducts, getProduct,
        addProduct, updateProduct,
        deleteProduct } = require('../controller/products.controller');

router.get('/api/products', getProducts);  // GET ALL PRODUCTS 
  
router.get('/api/products/:id', getProduct);  // GET SINGLE PRODUCT BY ID

router.post('/api/add_product', addProduct);  // SAVE PRODUCT

router.put('/api/update_product/:id', updateProduct);  // UPDATE PRODUCT

router.delete('/api/delete_product/:id', deleteProduct);  // DELETE PRODUCT

module.exports = router;

