if (module)
   module.exports = NotImplementedError;

/**
 * Throw if a piece of functionality isn't implemented yet but it was used
 *  anyway.
 */
function NotImplementedError() {
   ExtendableError.apply(this, arguments);
}
NotImplementedError.prototype = Object.create(ExtendableError.prototype);
NotImplementedError.prototype.name = 'NotImplementedError';
NotImplementedError.prototype.constructor = NotImplementedError;
