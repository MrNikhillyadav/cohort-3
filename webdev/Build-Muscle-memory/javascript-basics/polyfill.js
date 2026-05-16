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
   Array.prototype.myReduce = function(callback, initalValue){
    let accumulator = initalValue ;
    let startIndex = 0;

    if(initalValue === undefined){
        accumulator = this[0];
        startIndex = 1;
    }

    for(let i= startIndex; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

const sum = [1,2,6].myReduce((a,b) => a+b,0);  // 0 : starting accumulator value
console.log(sum);
  

  
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
