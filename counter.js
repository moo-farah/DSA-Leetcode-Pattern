// Give an integer n, return a counter function. 
// This counter function initally returns n and then returns 1 more that the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    let count = n - 1;
    return function() {
        count++;
        return count;
    }
}               

const counter = createCounter(3);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12