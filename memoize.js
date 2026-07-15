// Given a function fn, return a momorized version of that function.
// A memorized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.


function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if(!(key in cache)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

memoizedFn(2, 3)
memoizedFn(2, 3)
console.log(callCount);