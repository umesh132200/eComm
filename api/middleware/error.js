const winston = require('winston');  

module.exports = function(err, res, res, next) {
  //log here
  winston.error(err.message, err);
  res.status(500).send('Something goes wrong try afew minute later..!!');
}