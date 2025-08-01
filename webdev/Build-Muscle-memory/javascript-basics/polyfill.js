//Polyfill for filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // Example:
  const nums = [1, 2, 3];
  const even = nums.myFilter(n => n % 2 === 0); // [2]
  

//Polyfill for reduce
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue ?? this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // Example:
  const sum = [1, 2, 3].myReduce((acc, val) => acc + val, 0); // 6
  

  
//Polyfill for map
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    // Only call callback for existing elements (to support sparse arrays)
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Example:
const arr = [1, 2, 3];
const squared = arr.myMap(x => x * x); // [1, 4, 9]
