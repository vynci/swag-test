'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.classesPharmacyGET = function classesPharmacyGET (req, res, next) {
  Default.classesPharmacyGET(req.swagger.params, res, next);
};

module.exports.classesTransactionitemGET = function classesTransactionitemGET (req, res, next) {
  Default.classesTransactionitemGET(req.swagger.params, res, next);
};
