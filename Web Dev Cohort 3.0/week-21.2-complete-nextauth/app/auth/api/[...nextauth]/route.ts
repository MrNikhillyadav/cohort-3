import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
              username: { label: "email", type: "text", placeholder: "nikhil@gmail.com" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials:any) {
              const user = { 
                    id: "1",
                    name: "Nikhil  Y",
                    email: "nikhil@gmail.com" ,
                    password:"1234"
                 }
        
                 if (user){
                    return user
                }
                else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
   callbacks : {
        jwt ({token,user}){
            if(user){
                token.id = user.id
            }
            return token
        },
        session ({session,token,user}){
            session.user.id = token.id;
            return session
        }
   }
   
})

export  {handler as GET, handler as POST}