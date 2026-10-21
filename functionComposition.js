// Given an array of functions [f1, f2, f3, ..., fn], 
// return a new function fn that is the function composition of the array of functions

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) {
            return x;
        }
    }
    return functions.reduceRight(function(prevFn, nextFn) {
        return function(x) {
            return nextFn(prevFn(x));
        }
    });
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9