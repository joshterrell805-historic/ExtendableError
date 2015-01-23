/**
 * Base class for errors.
 * You probably shouldn't throw one of these, but instead subclass it or use
 *  one of the supplied Error types below.
 */
function ExtendableError() {
  var tmp = Error.apply(this, arguments);
  this.stack = tmp.stack;
  this.stack = this.stack.replace(/^Error/, this.name);
  this.message = tmp.message;
}
ExtendableError.prototype = Object.create(Error.prototype);
ExtendableError.prototype.name = 'ExtendableError';
ExtendableError.prototype.constructor = ExtendableError;

/**
 * An error with an error code.
 * code is first param, normal arguments thereafter.
 */
function CodedError(code) {
  ExtendableError.apply(this, Array.prototype.slice.call(arguments, 1));
  this.code = code;
}
CodedError.prototype = Object.create(ExtendableError.prototype);
CodedError.prototype.name = 'CodedError';
CodedError.prototype.constructor = CodedError;
