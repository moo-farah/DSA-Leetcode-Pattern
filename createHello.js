// Create hello world function Day 1 
// Closure: is when a function remembers the variables from the scope it was created in

/**
 * @return {Function}
 */
const createHelloWorld = function() {
    return function(...args) {
        return "Hello world";
    }
}
const create = createHelloWorld()
console.log(create());

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


