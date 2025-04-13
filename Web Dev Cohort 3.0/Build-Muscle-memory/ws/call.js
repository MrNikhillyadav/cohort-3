//call() method -------------

// #1.

// const person = {
//     name : "Nikhil Y",
//     greet: function(){
//         console.log( `Good morning Mr. ${this.name}`)
//     } 
// }

// const person1 = { name : "Rajneesh"};
// person.greet.call(person1)



// #2

// const person = {
//     fullName: function(city, country) {
//       return ` I am ${this.firstName} ${this.lastName},from ${city}, ${country}`;
//     }
//   };
  
// const john = { firstName: "John", lastName: "Doe" };
// console.log(person.fullName.call(john, "New York", "USA")); 



// Apply () method ----------------

// #1

// const person = {
//     name: "Nikhil Y",
//     greet: function (greeting) {
//         console.log(`${greeting} Mr. ${this.name}`);
//     }
// };

// const person1 = { name: "Rajneesh" };
// person.greet.apply(person1, ["Good afternoon"]);


// #2

// const person = {
//     firstname : "Kartik",
//     lastname : "Sharma" 
// }

//  // we can also make it a method insted of a separate function. Works similar.
// function Greet(greeting, message){
//     return `${this.firstname}, ${greeting}! ${message}`
// }

// const person2 = {
//     firstname : "Aman",
//     lastname : "Kapoor"
// }

// console.log(Greet.apply(person2, ["Good evening", "How are you ?"]))


// #3

// const person = {
//     firstname : "Kartik",
//     lastname : "Sharma",
//     Greet : function(greeting, message){
//         return `${this.firstname}, ${greeting}! ${message}`
//     }   
// }

// const person2 = {
//     firstname : "Aman",
//     lastname : "Kapoor"
// }

// console.log(person.Greet.apply(person2, ["Good evening", "How are you ?"]))



// #3. Bind() method  -----------------

// #1

// const manager = {
//     name : "Sachin",
//     speech : function() {
//         console.log(`well done ${this.name} sir`)
//     }
// }

// const intern = {
//     name : "Rahul"
// }

// const bindSpeech = manager.speech.bind(intern)
// bindSpeech();




// #2

// function multiply(a, b) {
//     return a * b;
//   }
  
// const multiplyByTwo = multiply.bind(null, 2);
// console.log(multiplyByTwo(5)); // Output: 10



  