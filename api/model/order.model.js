const mongoose = require('mongoose');

const order = new mongoose.Schema({

});

const OrderModel = mongoose.model('order', order);

/* GET ALL ORDERS */
exports.getAllOrders = async (req, res) => {
    const result = await rderModel.find();
    res.send(result);
}

/* GET A SINGLE ORDER */
exports.getOrder = async (req, res) => {
    const result = await OrderModel.findById(req.params.id);
    res.send(result);
}

/* CREATE ORDER */
exports.addOrder = async (req, res) => {
    const result = await OrderModel.create(req.body);
    res.send(result);
}

/* UPDATE ORDER */
exports.updateOrder = async (req, res) => {
    const result = await OrderModel.findByIdAndUpdate(req.params.id, req.body);
    res.send(result);
}

/* DELETE ORDER */
exports.deleteOrder = async (req, res) => {
    const result = await OrderModel.findByIdAndRemove(req.params.id);
    res.send(result);
}