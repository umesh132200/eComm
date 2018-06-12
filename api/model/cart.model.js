const mongoose = require('mongoose');

const cart = new mongoose.Schema({

});

const cartModel = mongoose.model('cart', cart);

/* GET ALL CUSTOMERS */
exports.getAllCart = async (req, res) => {
    const result = await cartModel.find();
    res.send(result);
}

/* GET A SINGLE CUSTOMER */
exports.getCart = async (req, res) => {
    const result = await cartModel.findById(req.params.id);
    res.send(result);
}

/* ADD NEW CUSTOMER */
exports.addCart = async (req, res) => {
    const result = await cartModel.create(req.body);
    res.send(result);
}

/* UPDATE CUSTOMER INFO */
exports.updateCart = async (req, res) => {
    const result = await cartModel.findByIdAndUpdate(req.params.id, req.body);
    res.send(result);
}
/* DELETE CUSTOMER */
exports.deleteCart = async (req, res) => {
    const result = await cartModel.findByIdAndRemove(req.params.id);
    res.send(result);
}