import React from "react";
import SignUpForm from "@/components/form/SignUpForm";
import SignUpBanner from "@/assets/images/banner.jpg";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full lg:w-3/5">
        <div className="flex flex-col items-center justify-center">
          <div className="px-3 mb-6 w-80">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
              Get Stated Now
            </h2>
            <p className="text-[13.5px] leading-5">
              Enter Email address and choose strong password to continue
            </p>
          </div>
          <div className="px-3 w-80">
            <SignUpForm />
          </div>
          <div className="px-3 w-80">
            <div className="flex items-center w-full mx-auto my-4 text-[#727279] justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <div>
              <p className="mt-2 text-sm text-center text-gray-600">
                Have an account?&nbsp;
                <Link className="text-blue-500 hover:underline" to={"/sign-in"}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-2/5">
        <img
          className="h-screen border border-stone-200 rounded-l-3xl"
          src={SignUpBanner}
          alt="SignUpBanner"
        />
      </div>
    </div>
  );
};

export default SignUp;
