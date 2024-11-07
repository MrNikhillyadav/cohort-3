// function sum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// const result = sum(40,20);
// console.log(result);


// function sumOfN(n){
//     let sum = 0;
//     for(i=0; i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfN(12)) //28


//objects
// const student ={
//     name:"Nikhil Yadav",
//     age :22,
//     city: 'Delhi',
//     country: 'India',
//     role: 'Developer',
// }
// console.log(student.name)
// console.log(student['age'])



// // Assignment #1

// function greet(user){
//     const {name,age} = user;
//     console.log ('Hello '+ name + '. your age is :' + age)
// }
// const user={
//     name : 'Nikhil',
//     age : 22,
// }
// greet(user)



//Assignment #2

// function greetUser(user) {
//     const { name, age, gender } = user; // Destructure name, age, and gender from the user object

//     let title;
//    switch (gender.toLowerCase()) {
//     case 'male':
//         title = 'Mr.';
//         break;

//     case 'female':
//         title = 'Mrs.';
//         break;

//     default:
//         title = 'Others';
//         break;
//    }
//     console.log(`Hi ${title} ${name}, your age is ${age}.`);
// }

// const user1 = {
//     name: "Harkirat",
//     age: 21,
//     gender: "male"
// };

// const user2 = {
//     name: "Alice",
//     age: 30,
//     gender: "female"
// };

// const user3 = {
//     name: "Jordan",
//     age: 25,
//     gender: "non-binary"
// };

// greetUser(user1); // Output: Hi Mr. Harkirat, your age is 21.
// greetUser(user2); // Output: Hi Mrs. Alice, your age is 30.
// greetUser(user3); // Output: Hi Others Jordan, your age is 25.





// ASSIGNMENT #3

// const user1 = {
//         name: "Jordan",
//         age: 25,
//         gender: "Male",
//     };

// const user2 = {
//         name: "Michael",
//         age: 16,
//         gender: "Male",
//     };

// function isEligibleToVote(user){
//     const {name,age,gender} = user;

//     // if(age >= 18) console.log ('You are eligible to vote');
//     // else console.log ('You are not eligible to vote');
    
//     //or using ternary operator
//     const message = age >= 18 
//     ? `You are eligible to vote, ${name}!` 
//     : 'You are not eligible to vote, '+ name + '!';

//     console.log(message);
// }

// isEligibleToVote(user1)
    


// ASSIGNMENT

// const numArr = [4,8,7,5,3,13,12,42,16,19,11]
// function evenNum(arr){
//     return arr.filter(num => num % 2 === 0);
// }
// const result = evenNum(numArr)
// console.log(result);




// // ASSIGNMENT 

// const users = [
//     { name: "Harkirat", age: 21, gender: "male" },
//     { name: "Alice", age: 19, gender: "female" },
//     { name: "Jordan", age: 25, gender: "non-binary" },
//     { name: "Sam", age: 16, gender: "other" },
//     { name: "Emily", age: 30, gender: "female" }
// ];
// function aboveEighteen(users){
//     return users.filter(user => user.age >= 18)
//                 . map(user => user.name);
// }

// const adults = aboveEighteen(users)
// console.log(adults);




// ASSIGNMENT 

// const users = [
//     { name: "Harkirat", age: 21, gender: "male" },
//     { name: "Alice", age: 19, gender: "female" },
//     { name: "Jordan", age: 25, gender: "non-binary" },
//     { name: "Sam", age: 16, gender: "other" },
//     { name: "Emily", age: 30, gender: "female" }
// ];
// // return name i.e. age >=18 and male.
// function aboveEighteen(users){
//     return users.filter(user => user.age >= 18 && user.gender === "male")
//     .map(user => user.name);
// }

// const result = aboveEighteen(users);
// console.log(result);




// const fs = require('fs')

// fs.readFile('a.txt','utf-8',function(err,data){
//       console.log(data)
// })






