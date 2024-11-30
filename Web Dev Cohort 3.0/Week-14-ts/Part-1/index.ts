function greet(user:userType){
          console.log(`Hello ${user.name}`)
          console.log(`You are ${user.age} years old`)
}

type userType = {
          name: string;
          age: number;
          city: string;
}

 let user : userType = {
          "name": "John",
          "age": 30,
          "city": "New York",
}

greet(user)