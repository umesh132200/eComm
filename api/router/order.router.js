const express = require('express');
const router = express.Router();

const { getAllOrders, getOrder,
        addOrder, updateOrder,
        deleteOrder } = require('../controller/orders.controller')

router.get('api/orders', getAllOrders);  // GET ALL ORDERS
router.get('api/order/:id', getOrder);  // GET A SINGLE ORDER
router.post('api/add_order', addOrder);  // ADD NEW ORDER
router.put('api/update_order/:id', updateOrder);   // UPDATE ORDER
router.delete('api/delete_order/:id', deleteOrder); // DELETE ORDER

module.exports = router;