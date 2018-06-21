const winston = require('winston');
const express = require('express');
const app = express();
const config = require('config');
const path = require('path');

/* STARTUP */
require('./startup/logging')();  // LOGGING
require('./startup/routes')(app);  // ALL ROUTES
require('./startup/db')();  // CONNECTED TO MONGODB

/* STATIC VIEW */
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadedFiles', express.static('uploadedFiles'));

winston.info(`Application name: ${config.get('name')}`);

/* CREATE SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => { winston.info(`Server is listening at port: ${port}`);});
