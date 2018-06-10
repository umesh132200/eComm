const mongoose = require('mongoose');

const order = new mongoose.Schema({

});

const OrderModel = mongoose.model('order', order);

/* GET ALL ORDERS */
exports.getAllOrders = (req, res, next) => {
    OrderModel.find((err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* GET A SINGLE ORDER */
exports.getOrder = (req, res, next) => {
    OrderModel.findById(req.params.id, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* CREATE ORDER */
exports.addOrder = (req, res, next) => {
    OrderModel.create(req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* UPDATE ORDER */
exports.updateOrder = (req, res, next) => {
    OrderModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);

    });
}

/* DELETE ORDER */
exports.deleteOrder = (req, res, next) => {
    OrderModel.findByIdAndRemove(req.params.id, (err, result) => {
      if(err) return next(err);
      res.send(result);
    });
}