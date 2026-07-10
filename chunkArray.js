// Given an arr and a chunk size size, return a chunked array.

let chunk = function(arr, size) {
    let res = [];
    let new1 = [];
    if (arr.length) {
        arr.forEach((item, i) => {
            new1.push(item);
            if(new1.length === size || i === arr.length - 1) {
                res.push(new1.slice());
                new1 = [];
            }
        });
    } else {
        return [];
    }
    return res;
}

// Test cases
console.log(chunk([1, 2, 3, 4, 5], 2));  // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5], 3));  // [[1,2,3],[4,5]]
console.log(chunk([1, 2, 3], 1));         // [[1],[2],[3]]
console.log(chunk([], 2));                // []
