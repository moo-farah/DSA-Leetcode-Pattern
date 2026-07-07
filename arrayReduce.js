// Given an integer nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, 
// passing in the retun value from the calculation on the preceding element. 

function reducer(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}

result = reducer([1, 2, 3, 4, 5],(acc, curr) => acc + curr, 0);
console.log(result); // Output: 15

 // Here's a breakdown of how the reducer function works:
 // 0 + 1 = 1
 // 1 + 2 = 3
 // 3 + 3 = 6
 // 6 + 4 = 10
 // 10 + 5 = 15