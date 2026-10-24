// Given an object or array, obj, return a compacted object.
// A compacted object is the same as the original object, except with keys containing falsy values removed.


/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj
        .map((item) => compactObject(item))
        .filter(Boolean);
    }

    const res = {};
    for (const key in obj) {
        const compacted = compactObject(obj[key]);

        if (compacted) {
            res[key] = compacted;
        }
    }
    return res;
};