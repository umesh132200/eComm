const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const cors = require('cors');
const product = require('../api/router/product.router');
const order = require('../api/router/order.router');
const customer = require('../api/router/customer.router');
const cart = require('../api/router/cart.router');
const error = require('../api/middleware/error');

module.exports = (app) => {
 if(app.get('env') === 'development') {
     app.use(morgan('tiny'));
     winston.info('morgan enabled...');
 }
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended : true}));
 app.use(product);
 app.use(order);
 app.use(customer);
 app.use(cart);
 app.use(error);
}