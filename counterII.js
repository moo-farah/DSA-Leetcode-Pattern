// Write a functiion createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: 
// increment, decrement, and reset. The increment function should increase the counter by 1. The decrement function should decrease the counter by 1. The reset function should set the counter to the initial value of init.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let createCounter = function(init) {
   let count = init

   const increment =() => ++count; 
   
   const reset = () => count = init; 
   
   const decrement = () => --count;

   return {
    increment,
    reset,
    decrement
  
   }
}


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4


// Solving the same problem using the class
class Counter {
    constructor(init) {
        this.init = init;
        this.count = init;
    }
    increment() {
        return ++this.init;
    }

    reset() {
        this.count = this.init;
        return this.count;
    }

    decrement(){
        return --this.init;
    }
}

const count = new Counter(5);
console.log(count.increment()); // 6
console.log(count.reset()); // 5
console.log(count.decrement()); // 4

