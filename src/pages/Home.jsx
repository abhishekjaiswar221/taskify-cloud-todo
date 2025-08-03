import React from "react";
import HeaderNavigation from "@/components/navigation/HeaderNavigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FooterNavigation from "@/components/navigation/FooterNavigation";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <HeaderNavigation />

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-green-200 rounded-full blur-[120px] opacity-20 z-0"></div>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col-reverse items-center justify-between gap-16 px-6 mx-auto py-28 max-w-7xl lg:flex-row">
        <div className="max-w-xl text-center lg:text-left">
          <div className="flex items-center justify-center mb-2 lg:justify-start">
            <span className="text-3xl">📒</span>
          </div>
          <h1 className="relative inline-block mb-4 text-5xl font-bold leading-tight text-gray-900">
            All your notes.
            <br />
            Organized.
            <br />
            Effortlessly.
            <span className="block w-24 h-1 mt-2 rounded-full bg-primary"></span>
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Inspiration strikes anywhere. Taskify lets you capture, organize,
            and share your ideas across any device.
          </p>
          <Link to="/sign-up">
            <Button className="w-48 rounded-xl h-11">
              Get Started – Sign Up
            </Button>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            className="w-full max-w-md border border-gray-100 shadow-xl lg:max-w-lg rounded-2xl"
            src="/images/homepage-banner.jpeg"
            alt="Taskify dashboard"
          />
        </div>
      </main>

      {/* Feature Section */}
      <section className="relative z-10 max-w-6xl px-6 pb-24 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Why Choose Taskify?
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 text-center transition shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
            <div className="mb-3 text-4xl">⚡</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Fast & Intuitive
            </h3>
            <p className="text-sm text-gray-600">
              Clean interface, quick access — capture thoughts the moment they
              come.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 text-center transition shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
            <div className="mb-3 text-4xl">🌐</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Sync Everywhere
            </h3>
            <p className="text-sm text-gray-600">
              Access your todos across devices — seamless syncing guaranteed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 text-center transition shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
            <div className="mb-3 text-4xl">🔒</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Secure & Private
            </h3>
            <p className="text-sm text-gray-600">
              Your notes are yours alone. We keep them safe and encrypted.
            </p>
          </div>
        </div>
      </section>

      <FooterNavigation />
    </div>
  );
};

export default Home;
