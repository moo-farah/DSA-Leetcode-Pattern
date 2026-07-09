// Given an object or an array, return if it empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You man assume the object or array is the output of JSON.parse

let isEmpty = function(obj) {
    if(Array.isArray(obj)) {
        return obj.length === 0;
    }else {
        return Object.entries(obj).length === 0;
    }
}

console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));