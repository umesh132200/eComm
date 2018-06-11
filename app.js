require('express-async-errors');
const error = require('./api/middleware/error');
const winston = require('winston');
require('winston-mongodb');
const express = require('express');
const app = express();
const debug = require('debug');
const mongoose = require('mongoose');
const morgan = require('morgan');

const product = require('./api/router/product.router');
const order = require('./api/router/order.router');
const customer = require('./api/router/customer.router');
const cart = require('./api/router/cart.router');

winston.add(winston.transports.File, { filename: 'logger.js'});
winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/logger'});

//connect to mongodb
mongoose.connect('mongodb://localhost/ecom')
 .then(() => console.log('connected to mongodb'))
 .catch( err => console.log('Mongodb connection failed'));


 //middileware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(product);
app.use(order);
app.use(customer);
app.use(cart);
app.use(error);

//create server
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server is listening at port: ${port}`);});
