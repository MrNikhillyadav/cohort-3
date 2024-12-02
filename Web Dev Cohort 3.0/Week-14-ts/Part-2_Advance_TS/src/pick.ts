interface User {
          name : string,
          age : number,
          email: string,
          password : string
          contact: number
}

type UpdateProp = Pick<User, 'email'|'password'>

let users : UpdateProp = {

          email: 'john@example.com',
          password: 'password123',
}

function UpdateUsers(users:UpdateProp){
          //update user
}

UpdateUsers(users)