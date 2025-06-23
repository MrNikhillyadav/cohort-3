interface User {
          name : string,
          age : number,
          email: string,
          password : string
          contact: number
}

type UpdateProps = {
          email? : string,
          name ? : string,
          password ?  : string,
}

type UpdatePropsOptional = Partial<UpdateProps>

function UpdateUser(user:UpdatePropsOptional){
          //update user
}

let user: UpdatePropsOptional = {
          email: 'john@example.com',
          password: 'password123',
}

UpdateUser(user)