const winston = require('winston');
require('express-async-errors');
require('winston-mongodb');

 module.exports = () => {
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({filename: 'uncaught_unhandled_Exception.log'})
    );

    process.on('unhandledRejection', (ex) => { throw ex; });

    winston.add(winston.transports.File, { filename: 'logger.log'});
    winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/logger', level: 'info'});
}
