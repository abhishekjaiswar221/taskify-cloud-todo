import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignUpFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  // Show Password
  const handleClick = () => setShow(!show);

  const form = useForm({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Submit the form
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/sign-up`,
        data
      );
      setLoading(false);
      if (response.data.success) {
        // Save the auth token of the user in the session storage
        sessionStorage.setItem("authToken", response.data.authToken);
        // Navigate to the sign in page
        setTimeout(() => {
          // Navigate to sign-in page
          navigate("/sign-in");
        }, 1000);
        // Display a toast when the user is registered successfully
        toast({
          title: "You're Registered Successfully !!",
          description: "Please sign in to continue",
        });
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log("Error:", error.response.data);
        console.log("Status:", error.response.status);
      } else if (error.request) {
        console.log("Error:", error.request);
      } else {
        console.log("Error:", error.error);
      }
      // Display a toast if the user already exist
      toast({
        title: "A user with this email already exists !!",
        description: "Please sign in to continue",
      });
      setTimeout(() => {
        // Navigate to sign-in page
        navigate("/sign-in");
      }, 1000);
    }
  };

  const formDetails = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
  ];

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {formDetails.map(({ name, label, type, placeholder }, index) => {
            return (
              <FormField
                key={index}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    <div className="relative">
                      <FormMessage className="absolute right-0" />
                    </div>
                  </FormItem>
                )}
              />
            );
          })}
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
              "Sign Up"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
