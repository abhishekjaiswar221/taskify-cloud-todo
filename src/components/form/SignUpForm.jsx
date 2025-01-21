// Add react spinner and loading bar
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
import { FormSchema } from "@/lib/form-schema";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  /**
   * Handles the form submission for user sign-up.
   * Sends a POST request to the sign-up API endpoint with user credentials.
   * On successful registration, stores the authentication token in session storage,
   * navigates to the sign-in page, and displays a success toast message.
   * If an error occurs, logs the error details, displays an error toast message,
   * and navigates to the sign-in page.
   *
   * @async
   * @function onSubmit
   * @returns {Promise<void>}
   */
  const onSubmit = async () => {
    const { name, email, password } = userCredentials;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/sign-up`,
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.data.success) {
        // Save the auth token of the user in the session storage
        sessionStorage.setItem("authToken", response.data.authToken);
        // Navigate to the sign in page
        navigate("/sign-in");
        // Display a toast when the user is registered successfully
        toast({
          title: "You're Registered Successfully !!",
          description: "Please sign in to continue",
        });
      }
    } catch (error) {
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
        title: "A user with this email already exists",
        description: "Please sign in to continue",
      });
      // Navigate to sign-in page
      navigate("/sign-in");
    }
  };

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

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
                      <Input
                        onChangeCapture={handleChange}
                        type={type}
                        placeholder={placeholder}
                        {...field}
                      />
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
                      onChangeCapture={handleChange}
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <div className="relative">
                    <button
                      onClick={handleClick}
                      className="absolute top-[10px] right-3"
                    >
                      {show ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <FormMessage className="absolute right-0" />
                </div>
              </FormItem>
            )}
          />
          <Button className="w-full mt-10" type="submit">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
