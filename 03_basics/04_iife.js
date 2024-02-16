// Immediately Invoked Function Expressions (IIFE)
// used to not get polluted by global variables
(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("goku")