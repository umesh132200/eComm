const mongoose = require('mongoose');
const winston = require('winston');

/* CONNECT TO MONGODB */
module.exports = () => { 
    mongoose.connect('mongodb://localhost/ecom')
    .then(() => winston.info('connected to mongodb'));
}