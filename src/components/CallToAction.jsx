import React from "react";

const CallToAction = () => {
  return (
    <div id="cta" className="bg-brightRed">
      <div className="container flex flex-col items center justify-between px-6 py-20 mt-24 mx-auto space-y-12 md:py-14 md:flex-row md:space-y-0">
        <h2 className="text-3xl font-bold leading-tight text-center text-white md:text-5xl md:text-left md:max-w-xl">
          Simplify how your team works today
        </h2>
        <div className="flex justify-center items-center">
          <a
            href=""
            className="text-1.5xl py-2 px-6 text-brightRed bg-white rounded-full baseline shadow-2xl  hover:bg-brightRedLight hover:text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
