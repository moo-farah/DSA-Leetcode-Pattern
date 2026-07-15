// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// added together with the + operator,
// when the String() function is called on the instance, it will return a comma separated string surrounded by brackets for example, [1,2,3]

var ArrayWrapper = function(nums) {
   this.nums = nums;
}

ArrayWrapper.prototype.valueOf = function() {
    let count = 0;
    for (let num of this.nums) {
        count += num;
    }
    return count;
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums);
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
