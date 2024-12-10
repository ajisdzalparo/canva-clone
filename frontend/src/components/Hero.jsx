import { Link } from "react-router"; // Perbaikan impor Link
import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col mx-auto items-center pt-8 pb-6 gap-8 mt-16 px-4 lg:pt-12 lg:pb-10">
      {/* Section Heading */}
      <div className="flex flex-col mx-auto text-center gap-6 lg:gap-8">
        <h1 className="text-3xl lg:text-6xl font-semibold px-4">
          What will you
          <span className="text-3xl lg:text-6xl font-semibold bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text text-transparent tracking-tight px-4">
            design
          </span>
          today?
        </h1>
        <span className="text-sm lg:text-lg px-4 text-opacity-35">
          Canva makes it easy to create professional designs and to share or
          print them.
        </span>
      </div>

      {/* CTA Button */}
      <Link
        className="px-4 py-2 bg-primary text-white text-sm lg:text-base rounded-md hover:bg-primaryHover transition-all duration-300"
        to="/"
      >
        Start designing
      </Link>
    </div>
  );
};
