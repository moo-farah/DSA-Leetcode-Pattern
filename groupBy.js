// Write code that enables all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array

Array.prototype.groupBy = function(fn) {
    const result = {};
    
    this.forEach(item => {
        const key = fn(item);  // Call function to get the grouping key
        
        if (!result[key]) {
            result[key] = [];   // Create group if doesn't exist
        }
        result[key].push(item); // Add item to its group
    });
    
    return result;
};

// Test cases
console.log("Test 1: Group numbers by odd/even");
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.groupBy(n => n % 2 === 0 ? 'even' : 'odd'));
// { odd: [1, 3, 5], even: [2, 4, 6] }

console.log("\nTest 2: Group fruits by first letter");
const fruits = ['apple', 'apricot', 'banana', 'blueberry'];
console.log(fruits.groupBy(fruit => fruit[0]));
// { a: ['apple', 'apricot'], b: ['banana', 'blueberry'] }

console.log("\nTest 3: Group objects by a property");
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
];
console.log(people.groupBy(person => person.age));
// { '25': [Alice object, Bob object], '30': [Charlie object] }
Array.prototype.groupBy = function(fn) {

}