import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2 flex-1 md:flex-none">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Products
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href=""
          className="hidden md:block py-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <button
          id="menu-btn"
          onClick={() => setToggle(!toggle)}
          className={
            toggle
              ? "block open hamburger md:hidden focus:outline-none"
              : " block hamburger md:hidden focus:outline-none"
          }
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="md:hidden">
          <div
            id="menu"
            className={
              toggle
                ? "absolute flex-col flex items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute flex-col hidden items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Products
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
