// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.

let addTwoPromises = async function (promise1, promise2) {
    try {
        const [res1, res2] = await Promise.all(([promise1, promise2]));
        return res1 + res1;
    }catch(error) {
        console.log(error)
        throw error
    }
    
}
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);