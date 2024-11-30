function one(fn: () => string) {
          setTimeout(() => {
              const result = fn(); // Call the callback function and store its result
              console.log(result); // Log the result to the console
          }, 2000);
      }
      
      function fn() {
          return "Callback function executed";
      }
      
      // Call the one function with fn as a callback
      one(fn);