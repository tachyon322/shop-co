"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { error } from "console";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, password } = validatedFields.data;

  try {
    await signIn("Credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };

        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
