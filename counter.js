// Give an integer n, return a counter function. 
// This counter function initally returns n and then returns 1 more that the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
// const createCounter = function(n) {
//     let count = n;
//     return function() {
//      return count++;
//     };
// };


// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12


// extending this problem to solve classes in ES6 JavaScript introduces
class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return ++this.n;
  }
}

const counter = new Counter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.increment()); // 13

