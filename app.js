const winston = require('winston');
const express = require('express');
const app = express();
const config = require('config');

/* STARTUP */
require('./startup/logging')();  // LOGGING
require('./startup/routes')(app);  // ALL ROUTES
require('./startup/db')();  // CONNECTED TO MONGODB

winston.info(`Application name: ${config.get('name')}`);

/* CREATE SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => { winston.info(`Server is listening at port: ${port}`);});
