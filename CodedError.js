if (module) {
  var ExtendableError = require('./ExtendableError.js');
  module.exports = CodedError;
}

/**
 * An error with an error code.
 * code is first param, normal arguments are after.
 */
function CodedError(code) {
  ExtendableError.apply(this, Array.prototype.slice.call(arguments, 1));
  this.code = code;
  this.message = 'CODE: ' + code;
}
CodedError.prototype = Object.create(ExtendableError.prototype);
CodedError.prototype.name = 'CodedError';
CodedError.prototype.constructor = CodedError;
CodedError.prototype.toString = function toString() {
  return 'CodedError: ' + this.message;
};
