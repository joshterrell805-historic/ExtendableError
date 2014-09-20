if (module)
   module.exports = NotReadyError;

/**
 * Throw when function isn't ready to be called, and doesn't want to deal with
 *  queues and asynchronous stuff.
 */
function NotReadyError() {
   ExtendableError.apply(this, arguments);
}
NotReadyError.prototype = Object.create(ExtendableError.prototype);
NotReadyError.prototype.name = 'NotReadyError';
NotReadyError.prototype.constructor = NotReadyError;
