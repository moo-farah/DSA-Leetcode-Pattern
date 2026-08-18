// Write a functiion createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: 
// increment, decrement, and reset. The increment function should increase the counter by 1. The decrement function should decrease the counter by 1. The reset function should set the counter to the initial value of init.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let createCounter = function(init) {
   let count = init

   function increment() {
    return ++count;
   }

   function reset() {
    count = init
    return count;
   }

   function decrement() {
    return --count;
   }

   return {
    increment: increment,
    reset: reset,
    decrement: decrement
  
   }
}


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

