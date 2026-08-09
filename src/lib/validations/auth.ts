import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(30, "Name must not exceed 30 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long").max(30, "Password must not exceed 30 characters"),
});

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});