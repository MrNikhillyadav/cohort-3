function findMaxNumber(arr: number[]) :number {
          let max = -100000;
          for(let i=0; i<= arr.length; i++){
                    if(arr[i] > max ){
                              max = arr[i];
                    }
          }
          return max;
}

console.log(findMaxNumber([10,24,36,9,12,60,28]))


// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// let users: User[] = [
//           {firstName: 'John', lastName: 'Doe', age: 15},
//           {firstName: 'Jane', lastName: 'Doe', age: 10},
//           {firstName: 'Bob', lastName: 'Smith', age: 25},
//           {firstName: 'Alice', lastName: 'Johnson', age: 20}
// ]


// function areLegal(user: User[]) {
//         return user.filter(x => x.age >= 18  )
// }         

// console.log(areLegal(users))



