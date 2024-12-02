"use strict";
let user1 = {
    name: 'John',
    age: 30,
};
let user2 = {
    name: 'Rahul',
    age: 20,
};
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge(user1, user2);
console.log('result: ', result);
