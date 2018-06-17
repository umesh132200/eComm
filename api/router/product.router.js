const express = require('express');
const router = express.Router();
const { result } = require('../model/product.model');
const { getProducts, getProduct,
        addProduct, updateProduct,
        deleteProduct } = require('../controller/products.controller');

const multer = require('multer');

/* FILE STORAGE CONFIGURATION */
const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploadedFiles/');
        },
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString()+ file.originalname);
        }
    });
    
const fileFilter = (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
    
const upload = multer({
        storage: storage,
        limits: { fileSize: 1024*1024*5 },
        fileFilter: fileFilter        
        });

router.get('/api/products', getProducts);  // GET ALL PRODUCTS 
  
router.get('/api/products/:id', getProduct);  // GET SINGLE PRODUCT BY ID

router.post('/api/add_product', upload.single('productPhoto') , addProduct);  // SAVE PRODUCT

router.put('/api/update_product/:id', updateProduct);  // UPDATE PRODUCT

router.delete('/api/delete_product/:id', deleteProduct);  // DELETE PRODUCT

module.exports = router;

