import heroBanner from "@/assets/images/hero-banner.jpg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen px-20">
      <div className="flex flex-col items-start justify-center w-1/3 gap-4 pr-4">
        <h2 className="pb-2 text-5xl font-semibold leading-tight tracking-tight scroll-m-20 first:mt-0">
          All your notes. <br /> Organized. <br /> Effortlessy.
        </h2>
        <p className="leading-7">
          Inspiration strikes anywhere. Taskify lets you capture, organize, and
          share your ideas across any device.
        </p>
        <Link to={"/sign-up"}>
          <Button className="rounded-3xl h-11 w-44">Sign Up</Button>
        </Link>
      </div>
      <div className="w-2/3">
        <img className="w-full h-screen" src={heroBanner} alt="Hero Banner" />
      </div>
    </div>
  );
};

export default Hero;
