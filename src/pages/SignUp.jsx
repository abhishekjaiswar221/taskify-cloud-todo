import SignUpForm from "@/components/form/SignUpForm";
import SignUpBanner from "@/assets/images/banner.jpg";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen mx-10">
      <div className="w-full">
        <SignUpForm />
      </div>
      <div className="w-full ">
        <img
          className="w-full h-screen bg-cover border-2 border-red-600 rounded-l-3xl"
          src={SignUpBanner}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
