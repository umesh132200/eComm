const express = require('express');
const router = express.Router();
const debug = require('debug');

const product = ['mouse', 'monitor', 'keyboard'];

router.get('/api/product', (res, req) => {
    req.send(product);
 });

module.exports = router;