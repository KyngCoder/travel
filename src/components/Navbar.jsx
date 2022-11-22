import React, { useEffect, useState } from "react";
import logo from "../assets/img/travel-logo.png";
import { GiShipWheel } from "react-icons/gi";
import { MdAccountCircle, MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isFade, setIsFade] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

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
          <Link to="blog">Catamarans</Link>
        </li>
        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="blog">Blogs</Link>
        </li>
        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="/contact">Contact Us</Link>
        </li>
       
        <li className={`${isFade ? " fade" : "nav-links"}`}>
          <Link to="/Signup">
            <MdAccountCircle className="text-4xl" />
          </Link>
        </li>

        <li className="fade flex ">
          <Link to="/book">
          <button className="book-button px-6 py-2 text-lg bg-blue-500 rounded-lg shadow-md mr-4" href="#">
          Enquiry
          </button>
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
