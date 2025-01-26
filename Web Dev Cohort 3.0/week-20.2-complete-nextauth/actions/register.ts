"use server";

import prisma  from "@/prisma/prisma";
import bcrypt from 'bcrypt';

export const register = async (data) => {
    const { email, password } = data;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        if (user) {
            alert('User registered successfully!');
        }
    } catch (e) {
        console.error(e);
        alert('Error registering user: ' + e.message);
    }
};


