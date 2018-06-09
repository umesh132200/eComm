const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser'); 
const { result } = require('../model/product.model');
const { getProducts, getProduct } = require('../controller/product.Controller');

app.use(express.urlencoded({extended : true}));
app.use(bodyParser());

/* GET ALL PRODUCTS */
router.get('/api/products', getProducts);
  
  /* GET SINGLE PRODUCT BY ID */
router.get('/api/products/:id', getProduct)
//   router.get('/api/prouducts/:id', function(req, res, next) {
//     products.findById(req.params.id, function (err, result) {
//     if (err) return next(err);
//     res.json(result);
//   });
// });

/* SAVE PRODUCTS */
// router.post('/api/prouduct', function(req, res, next) {
//     products.create(req.body, function (err, result) {
//     if (err) return next(err);
//     res.json(result);
//   });
// });

/* UPDATE PRODUCTS */
// router.put('/api/prouduct/:id', function(req, res, next) {
//     products.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
//     if (err) return next(err);
//     res.json(result);
//   });
// });

/* DELETE BOOK */
// router.delete('/api/prouduct/:id', function(req, res, next) {
//     products.findByIdAndRemove(req.params.id, req.body, function (err, result) {
//     if (err) return next(err);
//     res.json(result);
//   });
// });

module.exports = router;

