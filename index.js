const express = require('express');
const app = express();

const debug = require('debug');
const mongoose = require('mongoose');

const product = require('./router/product');

mongoose.connect('mongodb://localhost/ecom')
 .then(() => console.log('connected to mongodb'))
 .catch( err => console.log('Mongodb connection failed'));

app.use(product);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is started at ${port}`));