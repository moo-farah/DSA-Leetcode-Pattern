// Given an array arr and a function fn, return a sorted array sortedArr.

let sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
}

console.log(sortBy([5, 2, 8, 1, 9], (n) => n));
