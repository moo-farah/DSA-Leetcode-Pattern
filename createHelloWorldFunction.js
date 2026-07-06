// Create 

function createHelloWorld () {
    let hi = "Hello World";
    return function() {
        return hi;
    }
}

const create = createHelloWorld();
console.log(create()); // Hello World