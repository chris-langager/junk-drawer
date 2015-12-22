'use strict';
const _ = require('lodash');
const validator = require('validator');

class JD {
    static is200(code) {
      return this._isInRange(code, 200, 299);
    }

    static is400(code) {
      return this._isInRange(code, 400, 499);
    }

    static is500(code) {
      return this._isInRange(code, 500, 599);
    }

    static _isInRange(num, min, max) {
      return (Number.isInteger(num) && num >= min && num <= max);
    }

    static parseInt(val) {
      if (!_.isString(val)) {
        throw new TypeError('parseInt expects a string.');
      }

      if (!validator.isNumeric(val)) {
        throw new Error(`parseInt cannot parse ${val} into and int.`);
      }

      return _.parseInt(val, 10);
    }

}

module.exports = JD;
