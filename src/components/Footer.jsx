import React from "react";
import logo from "../assets/images/logo-white.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import youtube from "../assets/images/icon-youtube.svg";
const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:space-y-0 md:flex-row">
        <div className="flex flex-col-reverse items-center justify-start space-y-6 md:flex-col md:space-y-3 md:items-start">
          <div className="text-white text-center pt-6 text-xs md:hidden">
            Copyright &copy; 2023, All Rights Reserved, Built and Published by
            Qayyum Ibrahim
          </div>
          <div className="mt-3 md:mt-5">
            <img src={logo} alt="" />
          </div>
          <div className="flex justify-center space-x-2 lg:space-x-4">
            <a href="#">
              <img src={facebook} alt="" className="h-5 lg:h-8" />
            </a>
            <a href="#">
              <img src={instagram} alt="" className="h-5 lg:h-8" />
            </a>
            <a href="#">
              <img src={pinterest} alt="" className="h-5 lg:h-8" />
            </a>
            <a href="#">
              <img src={twitter} alt="" className="h-5 lg:h-8" />
            </a>
            <a href="#">
              <img src={youtube} alt="" className="h-5 lg:h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-10 lg:space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-3 md:space-y-0 ">
              <input
                type="text"
                className="flex-1 rounded-full focus:outline-none py-2 px-6"
                placeholder="Update in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Manage
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden  text-white text-center pb-2 text-sm md:block">
        Copyright &copy; 2023, All Rights Reserved, Built and Published by
        Qayyum Ibrahim
      </div>
    </footer>
  );
};

export default Footer;
