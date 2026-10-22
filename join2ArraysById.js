// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joindArray should be the length of unique od id.


// Example 1:
// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]



/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const joindArray = arr1.concat(arr2);
    const mergedArray = {};

    joindArray.forEach(item => {
        if (!mergedArray[item.id]) {
            mergedArray[item.id] = item;
        } else {
            mergedArray[item.id] = { ...mergedArray[item.id], ...item };
        }
    });

    return Object.values(mergedArray);
}; 

console.log(join([{ id: 1, x: 1 }, { id: 2, x: 9 }], [{ id: 3, x: 5 }]));