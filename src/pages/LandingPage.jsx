import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import ClimbingPets from "../components/ClimbingPets";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen relative flex flex-col items-center justify-center text-center">
      <Hero />
      <About />
      <ClimbingPets />
    </div>
  );
}

export default LandingPage;

