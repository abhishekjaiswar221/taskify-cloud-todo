import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { SignInFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  let navigate = useNavigate();
  // Show password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const form = useForm({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit the form
  const onSubmit = async (data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/sign-in`,
      data
    );
    if (response.data.success) {
      //Save the authToken and redirect
      localStorage.setItem("authToken", response.data.authToken);
      toast({
        title: "Logged In !!!",
        description: "You're logged in successfully.",
      });
      navigate("/user-dashboard");
    } else {
      toast({
        title: "Invalid Details !!!",
        description: "Please enter the correct credentials.",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <div className="relative">
                  <FormMessage className="absolute right-0" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <div className="relative">
                    <div
                      onClick={handleClick}
                      className="absolute cursor-pointer top-[10px] right-3"
                    >
                      {show ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <FormMessage className="absolute right-0" />
                </div>
              </FormItem>
            )}
          />
          <Button className="w-full mt-10" type="submit">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
