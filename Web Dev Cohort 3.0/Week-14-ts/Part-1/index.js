"use strict";
function greet(user) {
    console.log(`Hello ${user.name}`);
    console.log(`You are ${user.age} years old`);
}
let user = {
    "name": "John",
    "age": 30,
    "city": "New York",
};
greet(user);
