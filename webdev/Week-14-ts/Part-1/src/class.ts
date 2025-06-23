
// class Rectangle {
//           width: number;
//           height: number;
      
//           constructor(width: number, height: number) {
//               this.width = width;
//               this.height = height;
              
//           }
      
//           CalculateArea(): number {
//               return this.width * this.height; 
//           }
//       }
      
//       const rectangle = new Rectangle(5, 10);
//       console.log(rectangle.CalculateArea()); 




// // class implementing an interface 

// interface People{
//           name : string,
//           age : Number
//           greet() : string
// }

// class Manager implements People {
//           number : string;
      
//           constructor(public name : string,  public age : number, number : string ){
//                     this.number = number
//           }

//           greet() : string {
//                     return `Hello, my name is ${this.name} and I am ${this.age}`
//           }
// }

// let user = new Manager('John', 30, '123')
// console.log(user.greet())



// class extending another class

// interface People {
//           name : string,
//           age : number,
//           isLegal() : boolean
// }

// class Voter implements People {

//           constructor(public name : string, public age : number){}

//           isLegal(): boolean {
//                     return this.age >= 18
//           }

//           canVote() : string {
//                     return this.isLegal() ? 'You can vote' : 'You cannot vote'
//           }
// }

// class ElectionBooth extends Voter {
          
//           constructor( name : string, age : number){
//                     super(name, age)
//           }

//           entryAllowed() : string {
//                     return this.isLegal() ? 'Entry Allowed' : 'Entry Not Allowed'
//           }
// }

// const voter = new ElectionBooth ('John', 26)
// console.log(voter.entryAllowed()); 
// console.log(voter.canVote()); 


 

//intersection '&' using types

// type user = {
//           name: string,
//           age: number,
//           greet(): string
// }
// type manager = {
//           department : string
// }

// type admin = user & manager

// let admin : admin = {
//           name : 'John',
//           age : 26,
//           department : 'HR',
//           greet() {
//                     return 'hi ' + this.name
//           }
// }

// console.log(admin.greet())




// //types intersection '&'

// type age = {
//           age: number,
// }
// type name = {
//           name: string
// }

// type nameOrAge = age | name

// let user: nameOrAge = {
//           name: 'John',
//           age: 26,
// }
// console.log(user) 


