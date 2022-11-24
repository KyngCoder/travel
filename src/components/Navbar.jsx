import React, { useEffect, useState } from "react";
import logo from "../assets/img/travel-logo.png";

import { MdAccountCircle, MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isFade, setIsFade] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isShown,setIsShown] = useState(false)

  const {logout} = UserAuth()

  const click = () => {
    setIsToggle((state) => !state);
    setIsOpen((state) => !state);
    setIsFade((state) => !state);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Image" />
      </div>
      <div
        onClick={click}
        className={`${isToggle ? "hamburger toggle" : "hamburger"}`}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`${isOpen ? "nav-links open" : "nav-links"}`}>
        <li className={`${isFade ? "fade " : "nav-links"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="/destination">Destinations</Link>
        </li>
        <li className={`${isFade ? "fade" : "nav-links"}`}>
          <Link to="/faq">FAQ</Link>
        </li>
        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="catamaran">Catamarans</Link>
        </li>

        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="/Signup" className="relative flex-col  ">
            <div class="relative inline-block text-left">
              <div>
               
                  <MdAccountCircle onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)} className="text-4xl flex items-center" />
                
              </div>

            
            </div>
          </Link>

          <div
                className={`absolute -bottom-4 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isShown?'block':'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <button
                    type="submit"
                    className="text-gray-900 font-medium block w-full px-4 py-2 text-left text-md"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                    onClick={logout}
                  >
                    Sign out
                  </button>
                </div>
              </div>
        </li>

        <li className="fade flex ">
          <Link to="/book">
            <button
              className="book-button px-6 py-2 text-lg bg-blue-500 rounded-lg shadow-md mr-4"
              href="#"
            >
              Enquiry
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
