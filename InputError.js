if (module)
   module.exports = InputError;

/**
 * Throw when input is unexceptable.
 */
function InputError(fieldName, humanReadableExpectedValue) {
   ExtendableError.call(this, fieldName + ' has an invalid value');
   this.fieldName = fieldName;
   this.humanReadableExpectedValue = humanReadableExpectedValue;
}
InputError.prototype = Object.create(ExtendableError.prototype);
InputError.prototype.name = 'InputError';
InputError.prototype.constructor = InputError;
