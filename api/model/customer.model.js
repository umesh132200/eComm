const mongoose = require('mongoose');

const customer = new mongoose.Schema({

});

const customerModel = mongoose.model('customers', customer);

/* GET ALL CUSTOMERS */
exports.getAllCustomers = (req, res, next) => {
    customerModel.find((err, result) => {
    if(err) return next(err);
    res.send(result);
    });
}

/* GET A SINGLE CUSTOMER */
exports.getCustomer = (req, res, next) => {
    customerModel.findById(req.params.id, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* ADD NEW CUSTOMER */
exports.addCustomer = (req, res, next) => {
    customerModel.create(req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* UPDATE CUSTOMER INFO */
exports.updateCustomer = (req, res, next) => {
    customerModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}

/* DELETE CUSTOMER */
exports.deleteCustomer = (req, res, next) => {
    customerModel.findByIdAndRemove(req.params.id, (err, result) => {
        if(err) return next(err);
        res.send(result);
    });
}