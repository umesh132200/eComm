const winston = require('winston');
const express = require('express');
const app = express();

/* STARTUP */
require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);

/* CREATE SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => { winston.info(`Server is listening at port: ${port}`);});
