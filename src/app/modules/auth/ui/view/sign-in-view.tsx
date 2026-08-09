"use client";

import { authClient } from "@/lib/auth-client";

import z from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { SignInSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { OctagonAlertIcon } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { FaGithub, FaGoogle } from "react-icons/fa";

import Link from "next/link";

const SignInView = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    setError(null);
    setPending(true);

    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setPending(false);
          router.push("/dashboard");
        },
        onError: ({ error }) => {
          setError(error.message);
          setPending(false);
        },
      }
    );
  };

  const onSocial = (provider: "github" | "google") => {
    setError(null)
    setPending(false)

    authClient.signIn.social(
      {
        provider: provider,
        callbackURL: "/dashboard"
      }, 
      {
        onSuccess: () => {
          setPending(false)
        },

        onError: ({error}) => {
          setPending(true)
          setError(error.message)
        }
      }
    )
  };

  return (
    <Card className="w-full p-4 py-6">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Sign in to access your curated library</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                placeholder="yourmail@gmail.com"
                {...form.register("email")}
              />
              <FieldError errors={[form.formState.errors.email]} />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Password</FieldLabel>
              </div>
              <Input
                type="password"
                placeholder="*********"
                {...form.register("password")}
              />
              <FieldError errors={[form.formState.errors.password]} />
            </Field>
          </FieldGroup>

          {!!error && (
            <Alert className="bg-destructive/10 border-none">
              <OctagonAlertIcon className="h-4 w-4 text-destructive!" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={pending}
            variant="default"
            className="w-full hover:bg-secondary"
          >
            {pending ? "Signing in..." : "Sign In"}
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={"default"}
              onClick={() => onSocial("google")}
              type="button"
              className="w-full"
            >
              <FaGoogle />
            </Button>
            <Button
              variant={"default"}
              onClick={() => onSocial("github")}
              type="button"
              className="w-full"
            >
              <FaGithub />
            </Button>
          </div>

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline underline-offset-4 font-medium">
              Sign Up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInView;
