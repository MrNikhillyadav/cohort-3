// defining type

// function greet(user:userType){
//           console.log(`Hello ${user.name}`)
//           console.log(`You are ${user.age} years old`)
// }

// type userType = {
//           name: string;
//           age: number;
//           city: string;
// }

//  let user : userType = {
//           "name": "John",
//           "age": 30,
//           "city": "New York",
// }

// greet(user)




// defining interfaces

// interface Address {
//           city : string,
//           pincode : number,
//           state : string,
//           houseNumber : string,
// }

// interface User {
//           name: string,
//           age: number,
//           address : Address,
// }

// interface Office {
//           address : Address,
// }

// let user: User = {
//           name : 'Nikhil',
//           age : 25,
//           address : {
//                     city : 'Pune',
//                     pincode : 411057,
//                     state : 'Maharashtra',
//                     houseNumber : '123',
//           }
// }

// function greet(user : User) {
//           console.log(`Hello ${user.name}`)
//           console.log(`You are ${user.age} y/o`)
//           console.log(`You live in ${user.address.city}, ${user.address.state} `)
       
// }

// greet(user)




// interface can have a default function implementation, type cannot have .

// interface People{
//           name: string,
//           age : number,
//           greet(): string
// }

// let user : People = {
//           name : 'Nikhil',    
//           age : 25,
//           greet: () =>  {
//                     return `Hi!`
//           }
// }

// let greeting = user.greet()
// console.log(greeting);



// Interfaces can extend other interfaces to get their properties and add upon them,
// just like types can do with union and intersection.

// interface Students {
//           name : string,
//           age : number,
//           studentId : number
// }

// interface ClassMonitor {
//           monitorId : number
// }

// interface StudentClassMonitor extends Students, ClassMonitor {
//           name : string,
//           age : number,
//           studentId : number,
//           monitorId : number,
//           greet : () => string;
// }

// let studentMonitor : StudentClassMonitor = {
//           name : 'Nikhil',
//           age : 25,
//           studentId : 12345,
//           monitorId : 12345,
//           greet : () => 'Hi ' + studentMonitor.name

// }
// console.log(studentMonitor.greet());



