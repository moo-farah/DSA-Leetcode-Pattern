// Given an integer nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, 
// passing in the retun value from the calculation on the preceding element. 

function reducer(nums, fn, init) {
    let res = init;
    for ( let i = 0; i < nums.length; i++){
        res = fn(res, nums[i])
    }
    return res;
    // return nums.reduce(fn, init);
}

res = reducer([1, 2, 3, 4],(acc, curr) => acc + curr, 0);
console.log(res); // Output: 23

// Here's a breakdown of how the reducer function works:
// initial value 0 
// acc + curr = 0 + 1 = 1
// acc + curr = 1 + 2 = 3
// acc + curr = 3 + 3 = 6
// acc + curr = 6 + 4 = 10