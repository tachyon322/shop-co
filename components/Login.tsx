"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas/LoginSchema";
import { loginAction } from "@/actions/login";
import { Alert } from "antd";
import { useState, useTransition } from "react";
import LoginGoogle from "./LoginGoogle";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      loginAction(values)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
    })
  }

  return (
    <div>
      <div className="w-[400px] h-auto bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
        <h1 className="mb-9">Login</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-center space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error ? <Alert message={error} type="error" /> : null}
                {success ? <Alert message={success} type="success" /> : null}

                <Button type="submit">Login</Button>
                <LoginGoogle />
              </div>
            </form>
          </Form>

          <Link href="/register">
            <p>Don't have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
