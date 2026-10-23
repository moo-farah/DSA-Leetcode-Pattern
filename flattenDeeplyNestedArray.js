// Given a multi-dimensional array, arr and a depth n, return a flattened version of that array.
// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   const res = [];

   for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
        res.push(...flat(item, n - 1));
    } else {
        res.push(item);
    }
   }

   return res;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]], 2));

