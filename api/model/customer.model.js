const mongoose = require('mongoose');

const customer = new mongoose.Schema({

});

const customerModel = mongoose.model('customers', customer);

/* GET ALL CUSTOMERS */
exports.getAllCustomers = async (req, res) => {
    const result = await customerModel.find();
    res.send(result);
}

/* GET A SINGLE CUSTOMER */
exports.getCustomer = async (req, res) => {
    const result = await customerModel.findById(req.params.id);
    res.send(result);
}

/* ADD NEW CUSTOMER */
exports.addCustomer = async (req, res) => {
    const result = await customerModel.create(req.body);
    res.send(result); 
}

/* UPDATE CUSTOMER INFO */
exports.updateCustomer = async (req, res) => {
    const result = await customerModel.findByIdAndUpdate(req.params.id, req.body);
    res.send(result);   
}

/* DELETE CUSTOMER */
exports.deleteCustomer = async (req, res) => {
    const result = await customerModel.findByIdAndRemove(req.params.id);;
    res.send(result);
}