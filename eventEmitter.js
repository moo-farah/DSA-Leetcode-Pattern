/**
 * Design an EventEmitter class that allows subscribing to events and emitting them.
 * 
 * Methods:
 * - subscribe(eventName, callback): Register a callback for an event. Returns an object 
 *   with an unsubscribe() method that removes this callback.
 * - emit(eventName, args): Trigger all callbacks subscribed to an event with the given 
 *   arguments. Returns an array of callback results.
 */

class EventEmitter {
  constructor() {
    // Store event names as keys, with arrays of callbacks as values
    this.events = {};
  }

  subscribe(eventName, callback) {
    // Initialize the event array if it doesn't exist
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    // Add the callback to the event's subscription list
    this.events[eventName].push(callback);

    // Return an unsubscribe object with a method to remove this callback
    return {
      unsubscribe: () => {
        // Find and remove this specific callback from the array
        const index = this.events[eventName].indexOf(callback);
        if (index > -1) {
          this.events[eventName].splice(index, 1);
        }
        return undefined;
      }
    };
  }

  emit(eventName, args = []) {
    // If the event has no subscribers, return empty array
    if (!this.events[eventName]) {
      return [];
    }

    // Call all callbacks for this event and collect their results
    const results = [];
    for (const callback of this.events[eventName]) {
      // Use spread operator to pass arguments, then push result
      const result = callback(...args);
      results.push(result);
    }

    return results;
  }
}

// ============ Test Cases ============

const emitter = new EventEmitter();

// Test 1: Basic subscription and emit
function addFunction(a, b) {
  return a + b;
}
const sub1 = emitter.subscribe('add', addFunction);
console.log(emitter.emit('add', [1, 2])); // [3]

// Test 2: Multiple subscribers
function multiplyFunction(a, b) {
  return a * b;
}
const sub2 = emitter.subscribe('add', multiplyFunction);
console.log(emitter.emit('add', [1, 2])); // [3, 2]

// Test 3: Unsubscribe
sub1.unsubscribe();
console.log(emitter.emit('add', [1, 2])); // [2]

// Test 4: Emit non-existent event
console.log(emitter.emit('nonexistent')); // []

// Test 5: Multiple events
const sub3 = emitter.subscribe('multiply', (a, b) => a * b);
console.log(emitter.emit('multiply', [5, 3])); // [15]
console.log(emitter.emit('add', [1, 2])); // [2] (still just multiply subscribed)

// Test 6: Unsubscribe returns undefined
console.log(sub2.unsubscribe()); // undefined
console.log(emitter.emit('add', [1, 2])); // []
