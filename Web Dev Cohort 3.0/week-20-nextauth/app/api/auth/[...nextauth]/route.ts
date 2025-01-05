
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const user = {
                    id : "1",
                    name : "Nikhil Y",
                    email : "nikhil@gmail.com",
                    password : "123"
                }

                if(user){
                    return user
                    
                }else{
                    return null;
                }

            },
          })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;