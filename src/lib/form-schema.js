import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be 8 characters"),
});
