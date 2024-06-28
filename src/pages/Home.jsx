import React from "react";
// import FooterNavigation from "@/components/layouts/FooterNavigation";
import HeaderNavigation from "@/components/layouts/HeaderNavigation";
// import heroBanner from "@/assets/images/user-dashboard.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HeaderNavigation />
      <div className="relative flex flex-row items-center justify-center h-screen">
        <div className="absolute flex flex-col items-start justify-center">
          <h2 className="pb-2 text-5xl font-semibold leading-tight tracking-tight scroll-m-20 first:mt-0">
            All your notes. <br /> Organized. <br /> Effortlessy.
          </h2>
          <p className="leading-7">
            Inspiration strikes anywhere. Taskify lets you capture, organize,
            and share your ideas across any device.
          </p>
          <Link to={"/sign-up"}>
            <Button className="rounded-3xl h-11 w-44">
              Get Started - Sign Up
            </Button>
          </Link>
        </div>
        <div className="">
          {/* <img className="h-screen" src={heroBanner} alt="Hero Banner" /> */}
        </div>
      </div>
      {/* <FooterNavigation /> */}
    </div>
  );
};
export default Home;
