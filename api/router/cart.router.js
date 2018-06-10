const express = require('express');
const router = express.Router();
const { getAllCart, getCart,
        addCart, updateCart,
        deleteCart } = require('../controller/cart.controller')

router.get('api/cart', getAllCart);  //  GET ALL CART
router.get('api/cart/:id', getCart);  //  GET A SINGLE CART
router.post('api/add_cart', addCart);  //  ADD CART
router.put('api/update_cart', updateCart);  //  UPDATE CART
router.delete('api/delete_cart', deleteCart);  //  DELETE CART

module.exports = router;