"use client"

import { authClient } from "@/lib/auth-client";

import z from 'zod'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { SignUpSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form"
import { useState } from "react";
import { useRouter } from "next/navigation";

import { OctagonAlertIcon } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import {FaGithub , FaGoogle} from "react-icons/fa"
import Link from "next/link";

const SignUpPage = () => {

  const router = useRouter();

  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    setError(null);
    setPending(true)

    authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password
      },

      {
        onSuccess: () => {
          setPending(false);
          router.push('/')
        },

        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        }
      }
    )
  }


  const onSocial = () => {
    console.log("Social Login")
  }

  return (
    <Card className="w-full p-4 py-6">
      <CardHeader>
        <CardTitle className="text-2xl">Begin your library</CardTitle>
        <CardDescription>Create Your Account to Get Started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit((onSubmit))} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel>Full Name</FieldLabel>
              <Input type="text" placeholder="John Doe" {...form.register("name")} />
              <FieldError errors={[form.formState.errors.name]} />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="yourmail@gmail.com" {...form.register("email")} />
              <FieldError errors={[form.formState.errors.email]} />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="*********" {...form.register("password")} />
              <FieldError errors={[form.formState.errors.password]} />
            </Field>
          </FieldGroup>

          {!!error && (
            <Alert className="bg-destructive/10 border-none">
              <OctagonAlertIcon className="h-4 w-4 text-destructive!" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Button type="submit" disabled={pending} variant="default" className="w-full hover:bg-secondary">Sign Up</Button>

          
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
                <Button variant={"default"} onClick={() => onSocial()} type="button" className="w-full">
                  <FaGoogle />
                </Button>
                <Button variant={"default"} onClick={() => onSocial()} type="button" className="w-full">
                  <FaGithub />
                </Button>
              </div>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline underline-offset-4 font-medium">
                  Sign In
                </Link>
              </div>
        </form>
      </CardContent>
    </Card >
  );
};

export default SignUpPage;
