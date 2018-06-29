const winston = require('winston');  

module.exports = function(err, res, res, next) {
  winston.error(err.message, err);
  res.status(500).send('Something goes wrong try afew minute later..!!');
}