// Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength(...args) {
    return args.length;
}

const result = argumentsLength(1, 2, 3, 4, 5);
console.log(result); // Output: 5