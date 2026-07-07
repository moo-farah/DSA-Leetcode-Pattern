// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

let once = function(fn) {
 let res;
    return function (...args) {
        if(fn) {
            res = fn(this, ...args);
            fn = null;
            return res;
        }
        return undefined
    }
}

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
