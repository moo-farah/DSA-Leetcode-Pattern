// Write a functiion createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: 
// increment, decrement, and reset. The increment function should increase the counter by 1. The decrement function should decrease the counter by 1. The reset function should set the counter to the initial value of init.

function createCounter (init) {
    let count = init;
    
    return {
        increment: function(){
            init++;
            return init;
        },
        decrement: function(){
            init--;
            return init;
        },
        reset: function(){
            init = count;
            return init;
        }
    }
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4