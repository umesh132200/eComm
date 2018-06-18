const mongoose = require('mongoose');
const faker = require('faker');
const productData = require('../router/product.router');
 
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
        }).array('productPhotos', 4);

//create schema for product
const productSchema = new mongoose.Schema({
    product: String,
    color: String,
    productMaterial:String,
    price: Number,
    productPhotos: Array
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
exports.addProduct = (req, res) => {
     upload(req, res, (err) => {
        if(err) {
            return res.end('File upload error');
        } 
            console.log(req.file);
            (async () => {
            const result = await ProductModel.create(
                {
                    product: req.body.product,
                    color: req.body.color,
                    productMaterial:req.body.productMaterial,
                    price: req.body.price,
                    productPhotos: req.files
                    
                });
            res.send('File uploaded'+result);
        })();}
    );    
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








