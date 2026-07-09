// Given a function fn, an array of arguments args and an interval time t, return a cancel function Cancelfn

let cancellable = function(fn, args, t) {
    let cancelled = false;
    fn(...args);
    let refreshIntervalID = setInterval(() => {
        if(!cancelled){
            fn(...args);
        }else {
            clearInterval(refreshIntervalID);
        }
    }, t)
    return () => {
        cancelled = true;
    }
};

// Define a test function
const log = (msg) => console.log(msg);

// Start the interval
const cancel = cancellable(log, ["Hello!"], 1000);

// Stop after 3500ms
setTimeout(() => {
    cancel();
    console.log("Cancelled!");
}, 3500);