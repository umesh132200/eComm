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

// process.on('uncaughtException', (ex) => {
//     console.log('WE GOT AN UNCAUGHT EXCEPTION');
//     winston.error(ex.message, ex);
// });

winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({filename: 'uncaught_unhandled_Exception.log'}));

process.on('unhandledRejection', (ex) => {
    // console.log('WE GOT AN UNHANDLED REJECTION');
    // winston.error(ex.message, ex);
    throw ex;
});

winston.add(winston.transports.File, { filename: 'logger.log'});
winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/logger', level: 'info'});

//connect to mongodb
mongoose.connect('mongodb://localhost/ecom')
 .then(() => winston.info('connected to mongodb'));


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

app.listen(port, () => { winston.info(`Server is listening at port: ${port}`);});
