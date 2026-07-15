// Design a Calculator class.

class Calculator {
    constructor (value) {
        this.value = value;
    }

    // Add method
    add(value) {
        this.value += value;
        return this
    }

    // subtract Method
    subtract(value) {
        this.value -= value;
        return this
    }

    // multiply
    multiply(value) {
        this.value *= value
        return this
    }

    // division method
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
        }else {
            this.value /= value
        }
        return this
            
        this.value /= value;
        return this
    }

    // Power
    power(value) {
        this.value = Math.pow(this.value, value);
        return this
    }

    // result
    getResult() {
        return this.value;
    }
}

const calc = new Calculator(10);
console.log(calc.add(5).multiply(2).subtract(10).divide(5).power(2).getResult());