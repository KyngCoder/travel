import React, { useState } from "react";
import logo from "../assets/img/travel-logo.png";
import { GiShipWheel } from "react-icons/gi";
import { MdAddCall } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-black z-100 sticky w-screen top-0">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="flex justify-start"
          >
            <img src={logo} className="w-44 mr-4" />
          </a>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Destination
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div className=" hidden lg:flex text-lg text-gray-300  justify-evenly  items-center">
          <MdAddCall className="text-4xl pt-2 text-white"/>
            <p className="py-2 pr-4"> +1 876 895-7287</p>
            <button className="bg-green-500 px-4 py-2 rounded-md text-lg font-bold text-white">
              Inquiry Now!!
            </button>
          </div>
          <div className="space-y-2 cursor-pointer lg:hidden" onClick={()=>setIsMenuOpen(true)}>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
{/* mobile */}
          <div className={`${isMenuOpen? 'absolute right-0 bg-black pt-8 top-0 w-64 flex justify-center px-4 py-4': 'hidden' }`}>
          <div  onClick={()=>setIsMenuOpen(false)}>
          <GiShipWheel className="bg-white absolute right-8 text-lg cursor-pointer top-4" />
          </div>
        
          <ul className=" items-center block text-lg px-4 cursor-pointer">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Destination
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                className=""
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
