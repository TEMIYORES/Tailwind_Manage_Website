import React from "react";
import anishaProfile from "../assets/images/avatar-anisha.png";
import richardProfile from "../assets/images/avatar-richard.png";
import shanaiProfile from "../assets/images/avatar-shanai.png";
const Testimonials = () => {
  return (
    <div id="testimonial">
      <div className="max-w-6xl sm:container px-5 mx-auto mt-20 md:mt-32 text-center">
        <h2 className="font-bold text-3xl md:text-4xl">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 mb-16 md:flex-row space-y-12 md:space-x-6 md:space-y-0">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={anishaProfile} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Lee</h5>
            <p className="text-darkGrayishBlue text-sm">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={richardProfile} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-darkGrayishBlue text-sm">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={shanaiProfile} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-darkGrayishBlue text-sm">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href=""
            className="py-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
