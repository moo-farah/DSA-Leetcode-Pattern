// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:

// set(key, value, duration) - accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has passed, the key should be inaccessible. The method should return true if the same un-expired key already exists, and false otherwise.
// get(key) - if the key exists, return the value and don't change the time remaining. Otherwise, return -1.
// count() - returns the count of un-expired keys.

var TimeLimitedCache = function() {
    map = new Map();
    let timer;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let res = map.has(key);
    if (res) {
        clearTimeout(map.get(key).timer);
    }
    timer = setTimeout(() =>map.delete(key), duration);
    map.set(key, {value, timer});
    return res;
 };

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (map.has(key)) return map.get(key).value;
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return map.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */