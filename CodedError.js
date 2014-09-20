if (module)
   module.exports = CodedError;

/**
 * An error with an error code.
 * code is first param, normal arguments are after.
 */
function CodedError(code) {
   ExtendableError.apply(this, Array.prototype.slice.call(arguments, 1));
   this.code = code;
}
CodedError.prototype = Object.create(ExtendableError.prototype);
CodedError.prototype.name = 'CodedError';
CodedError.prototype.constructor = CodedError;
