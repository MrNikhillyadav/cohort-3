import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db";
import { LoginSchema } from "./zod";
import { v4 as uuid } from "uuid";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {},
            async authorize(credentials) {
                const validatedCredentials = LoginSchema.safeParse(credentials);

                // Ensure validation was successful
                if (!validatedCredentials.success) {
                    throw new Error('Invalid credentials format');
                }

                const user = await prisma.user.findFirst({
                    where: {
                        email: validatedCredentials.data.email,
                        password: validatedCredentials.data.password,
                    },
                });

                if (!user) {
                    throw new Error('Invalid credentials');
                }
                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || 'secr3t',
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user && token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/signin',
    },
};
