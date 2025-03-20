
function receivesAFunction(callback) {
    callback();
}


function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am an anonymous function!");
    };
}

// Example usage:
receivesAFunction(() => console.log("Callback function called!"));
const namedFn = returnsANamedFunction();
namedFn(); // Calls the named function

const anonymousFn = returnsAnAnonymousFunction();
anonymousFn(); // Calls the anonymous function
