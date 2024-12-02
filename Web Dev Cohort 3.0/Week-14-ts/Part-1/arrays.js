"use strict";
// function findMaxNumber(arr: number[]) :number {
//           let max = -100000;
//           for(let i=0; i<= arr.length; i++){
//                     if(arr[i] > max ){
//                               max = arr[i];
//                     }
//           }
//           return max;
// }
let users = [
    { firstName: 'John', lastName: 'Doe', age: 15 },
    { firstName: 'Jane', lastName: 'Doe', age: 10 },
    { firstName: 'Bob', lastName: 'Smith', age: 25 },
    { firstName: 'Alice', lastName: 'Johnson', age: 20 }
];
function areLegal(user) {
    return user.filter(x => x.age >= 18);
}
console.log(areLegal(users));
