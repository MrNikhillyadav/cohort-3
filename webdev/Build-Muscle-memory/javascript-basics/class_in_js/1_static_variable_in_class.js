class User {
  // Static property - shared by ALL User instances
  static userCount = 0;
  
  // Private instance property
  #username;

  constructor(username) {
    this.#username = username;
    // Increment the CLASS-LEVEL counter
    User.userCount++;  // Called on CLASS, not 'this'
  }

  // Instance method (works on each object)
  sayHello() {
    console.log(`Hello, I'm ${this.#username}`);
  }

  // Static method - called on CLASS directly
  static getUserStats() {
    console.log(`Total users created: ${User.userCount}`);
  }
}

// Usage
const user1 = new User("Alice");  // userCount becomes 1
const user2 = new User("Bob");    // userCount becomes 2
const user3 = new User("Charlie"); // userCount becomes 3

user1.sayHello();     // Hello, I'm Alice (instance method)
user2.sayHello();     // Hello, I'm Bob

User.getUserStats();  // Total users created: 3 (static method!)

// ❌ This would fail:
// user1.userCount     // undefined (static belongs to class)
// user1.getUserStats() // TypeError (static method needs class call)
