## 30 Days of JavaScript – LeetCode Notes

Notes and solutions from my journey through LeetCode's 30 Days of JavaScript challenge.

**Day: 1** Create Hello World Function
 function is a resuable block of code designed to perform a specific task
 define it once and can call (invoke) it as many times as you need.

``` 
function add(a, b) {
    const sum = a + b;
    return sum;
}
console.log(add(3, 4)); // 7
```

**Anonymous function**
you can exclude the name of the function after the function keyword.
``` 
var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)) // 7
```

**Immediatley Invoked Function Expression (IIFE)**
you can create a function and immediately execute it in JavaScript

``` 
const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result);  // 7
```

**Function Hoisting**
Hoisting where a function can sometime be used before it is initialized.

``` 
function createFunction() {
    return f;
    function f (a, b) {
        const sum = a + b;
        return sum;
    }
}

const f = createFunction();
console.log(f(3, 4))
```

**Closures**
A closure basically is when a function is created, it has access to a reference to all the variables declare arounf it also known as it's **lexical environment**

``` 
function createAdder(a) {
    function f (b) {
        const sum = a + b;
        return sum;
    }
    return f;
}

const f = createAdder(3);
console.log(f(4));   // 7
```

**Arrow Syntax**
``` 
const add = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(add(1, 3));   // 4
```

**Omit Return**
you can write the code in a single line, you can omit the return keyword.
``` 
const f = (a, b) => a + b;
 console.log(f(2, 3));  // 5
```

**Rest Arguments**
You can use **rest** syntax to access all the passed arguments as an array.
``` 
function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}
console.log(f(3, 4));  //7
```

**Day: 2**
Continous doing closure as well.

**Classes**
A class is a template for creating objects.
It bundles together data(properties) and behavior(methods) into a single blueprint you can reuse.
```
class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return ++this.n;
    }
}

const counter = new Counter(10)
console.log(counter.increment()) // 11
console.log(counter.increment()) // 12
console.log(counter.increment()) // 13
