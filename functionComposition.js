// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions

let compose = function(functions) {
    return function(x){
        if(functions.length === 0) return x;
        let input = x;

        for (let i = functions.length - 1; i >= 0; i-- ) {
            const currFunc = functions[i];
            input = currFunc(input);
        }
        return input;
    }
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))