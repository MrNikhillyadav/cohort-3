import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/db";
import { LoginSchema} from "./zod";

const adapter = PrismaAdapter(prisma)

export const authOptions = {
    adapter,
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: { },

            async authorize(credentials) {
                const validatedCredentials = LoginSchema.safeParse(credentials);


                const user = await prisma.user.findFirst({
                    where : {
                        email : validatedCredentials?.email,
                        password : validatedCredentials?.password,
                    }

                })

                if (!user){
                    throw new Error('Invalid credentials')
                }
                return user;
            }
        })
    ],
};

