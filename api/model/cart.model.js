const mongoose = require('mongoose');

const cart = new mongoose.Schema({

});

const cartModel = mongoose.model('cart', cart);

/* GET ALL CUSTOMERS */
exports.getAllCart = (req, res, next) => {
    cartModel.find((err, result) => {
    if(err) return next(err);
    res.send(result);
    });
}

/* GET A SINGLE CUSTOMER */
exports.getCart = (req, res, next) => {
    cartModel.findById(req.params.id, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* ADD NEW CUSTOMER */
exports.addCart = (req, res, next) => {
    cartModel.create(req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* UPDATE CUSTOMER INFO */
exports.updateCart = (req, res, next) => {
    cartModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* DELETE CUSTOMER */
exports.deleteCart = (req, res, next) => {
    cartModel.findByIdAndRemove(req.params.id, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}