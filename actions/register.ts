"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/LoginSchema";
import bcrypt from "bcrypt";
import { db } from "@/db";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) return {error: "Invalid fields!"};

    const {email, password, name} = validatedFields.data;

    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {email}
    });

    if (existingUser) return {error: "This email taken!"}

    await db.user.create({
        data: {
            email,
            name,
            password: hashPassword
        }
    })


    return {success: "User Created!"};
}