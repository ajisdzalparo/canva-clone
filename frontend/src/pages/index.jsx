// Node modules
import React from "react";

// Components
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const index = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <Hero />
    </div>
  );
};
