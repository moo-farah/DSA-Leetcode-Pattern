// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

let cancellable = function(fn, args, t) {
    let isCancelled = false;
    setTimeout(() => {
        if(!isCancelled)
            fn(...args)
    }, t);
    return () => {
        isCancelled = true;
    };
}