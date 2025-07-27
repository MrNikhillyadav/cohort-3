// function Greeting(greet,name){
//     console.log(`Hello Mr. ${this.name}, ${greet}`)
// }

// Greeting("Hi","Ram")

// const person1 = {
//     name : "Rahul",
// }

// Greeting.call(person1,"Good night")
// Greeting.apply(person1,["Good Morning"])
// const resp = Greeting.bind(person1,"Good eve")
// resp()




const student = {
    name :"Nikhil",
    roll : "46",
    greet: function(){
        console.log(`Mr. ${this.name}, your roll no. is ${this.roll}`)
    }

}

const s1 = { name : "Ram", roll : "28"}

// student.greet.call(s1)
// student.greet.apply(s1,[])
const res = student.greet.bind(s1)
res()
