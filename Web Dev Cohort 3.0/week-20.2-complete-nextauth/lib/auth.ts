import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/db";
import { LoginSchema} from "./zod";
import { v4 as uuid } from "uuid";
import { encode as defaultEncode } from "next-auth/jwt";

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
    callbacks: {
        async jwt({ token, account }) {
          if (account?.provider === "credentials") {
            token.credentials = true;
          }
          return token;
        },
      },
      jwt: {
        encode: async function (params) {
          if (params.token?.credentials) {
            const sessionToken = uuid();
    
            if (!params.token.sub) {
              throw new Error("No user ID found in token");
            }
    
            const createdSession = await adapter?.createSession?.({
              sessionToken: sessionToken,
              userId: params.token.sub,
              expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            });
    
            if (!createdSession) {
              throw new Error("Failed to create session");
            }
    
            return sessionToken;
          }
          return defaultEncode(params);
        },
      },

};

