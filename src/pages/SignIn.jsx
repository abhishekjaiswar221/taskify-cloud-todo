import SignInForm from "@/components/form/SignInForm";
import SignUpBanner from "@/assets/images/banner.jpg";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 ">
        <img
          className="h-screen border border-stone-200 rounded-r-3xl"
          src={SignUpBanner}
          alt="SignUpBanner"
        />
      </div>
      <div className="flex items-center justify-center w-3/5">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 w-80">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
              Welcome Back
            </h2>
            <p className="text-sm">
              Enter your Credentials to access your account
            </p>
          </div>
          <div className="w-80">
            <SignInForm />
          </div>
          <div className="w-80">
            <div className="flex items-center w-full mx-auto my-4 text-[#727279] justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <div>
              <p className="mt-2 text-sm text-center text-gray-600">
                Don&apos;t have an account?&nbsp;
                <Link className="text-blue-500 hover:underline" to={"/sign-up"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
