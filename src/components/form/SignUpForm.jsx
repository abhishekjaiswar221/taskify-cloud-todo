"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be 8 characters"),
});

const SignUpForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    toast({
      title: "Your are Registered !!!",
      description: "Your are registered successfully.",
    });
  };
  const formDetails = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter the name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter the email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter the password",
    },
  ];
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {formDetails.map(({ name, label, type, placeholder }, index) => {
          return (
            <FormField
              key={index}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <div className="flex">
                    <FormControl>
                      <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    <div className="relative flex items-center justify-end">
                      <FormMessage className="absolute" />
                    </div>
                  </div>
                </FormItem>
              )}
            />
          );
        })}

        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
