// const person = {
//     name : "Nikhil Y",
//     greet: function(){
//         console.log( `Good morning Mr. ${this.name}`)
//     } 
// }

// const person1 = { name : "Rajneesh"};

// person.greet.call(person1)


const person = {
    name: "Nikhil Y",
    greet: function (greeting, punctuation) {
        console.log(`${greeting} Mr. ${this.name}${punctuation}`);
    }
};

const person1 = { name: "Rajneesh" };

person.greet.apply(person1, ["Good afternoon", "!"]);

