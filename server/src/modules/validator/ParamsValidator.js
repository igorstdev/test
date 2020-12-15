'use strict';

const Validator = require('fastest-validator');
const validator = new Validator();

class ParamsValidator {
  
  customValidator(target, scheme) {
    return validator.validate(target, scheme);
  }
}

module.exports = ParamsValidator;