const express = require('express');
const router = express.Router();

const { getAllCustomers, getCustomer,
        addCustomer, updateCustomer,
        deleteCustomer } = require('../controller/customers.controller');

router.get('api/customers', getAllCustomers);  //  GET ALL CUSTOMERS
router.get('api/customer/:id', getCustomer);  //  GET A SINGLE CUSTOMER
router.post('api/add_customer', addCustomer);  //  ADD NEW CUSTOMER
router.put('api/update_customer/:id', updateCustomer);  // UPDATE CUSTOMER INFO
router.delete('api/delete_customer/:id', deleteCustomer);  //  DELETE CUSTOMER

module.exports = router;