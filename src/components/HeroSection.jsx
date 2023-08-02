import React from "react";
import illustration from "../assets/images/illustration-intro.svg";
const HeroSection = () => {
  return (
    <div id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:mb-18">
        <div className="flex flex-col space-y-6 md:space-y-12 md:w-1/2">
          <h1 className="max-w-lg text-3xl mt-12 font-bold text-center md:text-5xl md:text-left">
            Bringing everyone together to build better products
          </h1>
          <p className="max-w-sm text-center mx-auto text-darkGrayishBlue md:text-left md:mx-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href=""
              className="hidden md:block py-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
