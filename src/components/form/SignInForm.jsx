import React, { useState } from "react";
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
import { ClipLoader } from "react-spinners";
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
  // Loading state
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit the form
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/sign-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonData = await response.json();
      // Check if the response is successful
      setLoading(false);
      if (jsonData.success) {
        // Save the authToken and redirect
        localStorage.setItem("authToken", jsonData.authToken);
        // Show a toast message after login successful
        toast({
          title: "Logged In !!",
          description: "You're logged in successfully.",
        });
        // Navigate to user dashboard
        navigate("/user-dashboard");
      } else {
        // Handle invalid credentials
        toast({
          variant: "destructive",
          title: "Invalid Details !!",
          description: "Please enter the correct credentials.",
        });
      }
    } catch (error) {
      setLoading(false);
      // Catch errors in the request or response
      console.error("Error during sign-in:", error);
      toast({
        variant: "destructive",
        title: "Internal Server Error !!",
        description:
          "There was an error signing you in. Please try again later.",
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
          <Button disabled={loading} className="w-full mt-10" type="submit">
            {loading ? (
              <ClipLoader
                color={"#ffffff"}
                loading={loading}
                size={18}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
