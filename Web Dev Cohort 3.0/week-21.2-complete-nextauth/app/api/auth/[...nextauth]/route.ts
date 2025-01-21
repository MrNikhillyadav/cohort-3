import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
              username: { label: "email", type: "text", placeholder: "nikhil@gmail.com" },
              password: { label: "Password", type: "password", placeholder:"*********" }
            },

            async authorize(credentials:any) {
              const user = { 
                    id: "1",
                    name: "Nikhil  Y",
                    email: "nikhil@gmail.com" ,
                    password:"1234"
                 }
        
                 if (user){
                    return user;
                }
                else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages : {
        signIn : "/sign-in"
    }
   
})

export  {handler as GET, handler as POST}