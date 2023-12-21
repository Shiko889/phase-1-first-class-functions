function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Named function example
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Anonymous function example
    return function () {
      console.log("This is an anonymous function.");
    };
  }
