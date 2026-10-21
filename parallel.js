// Execute Asynchronous functions in parallel
// Given an array of asynchronous functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be exevuted in parallel.


/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results =[];
        let completed = 0;
        functions.forEach((fn, index) => {
            fn().then(result => {
                results[index] = result;
                completed++;
                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch(reject);   
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
const promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]