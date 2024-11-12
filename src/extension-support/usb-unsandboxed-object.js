const ContextMenuContext = require('./context-menu-context');
const Util = require('../util/usb-util');
const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop):
const catchError = async (promise, errors) => {
    if (!(promise instanceof Promise)) {
        throw new TypeError('Expected "promise" to be PromiseLike.');
    }
    if (errors !== undefined) {
        if (!Array.isArray(errors)) {
            throw new TypeError('Expected "errors" to be undefined or an array.');
        }
        if (!errors[0]) {
            throw new RangeError('Expected "errors" array to be bigger than 0.');
        }
    }
    return promise.then(v => [undefined, v]).catch(e => {
        if (
            errors !== undefined ||
            !errors.some(p => (e instanceof p))
        ) return;
        return [e, undefined];
    });
};

module.exports = function() {
    return {
        ContextMenuContext,
        Util,
        hasOwn,
        catchError
    };
};
