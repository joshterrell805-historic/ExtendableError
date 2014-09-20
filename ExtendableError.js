if (module)
   module.exports = ExtendableError;

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
