const person = {
    name : "Nikhil Y",
    greet: function(){
        console.log( `Good morning Mr. ${this.name}`)
    } 
}

const person1 = { name : "Rajneesh"};

person.greet.call(person1)