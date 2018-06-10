const { getAllCustomers, getCustomer,
        addCustomer, updateCustomer,
        deleteCustomer } = require('../model/customer.model');

exports.getAllCustomers = getAllCustomers;
exports.getCustomer = getCustomer;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;        