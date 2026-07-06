// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe (val) accepts another value and return true if the two values ===
// notToBe (val) accepts another value and returns true if the two values !==

function expect(val) {
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: (val2) => {
            if (val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
       
    }
}

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(6)); // true