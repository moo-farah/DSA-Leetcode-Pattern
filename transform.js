/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
    for (const i in arr) {
        res.push(fn(arr[i], Number(i)));
    }
    return res;
};

// testing
const result = map([1, 2, 3], (x) => x * 2);
console.log(result); // [2, 4, 6]
