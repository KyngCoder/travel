import React from "react";

import { MdLocationPin, MdStar } from "react-icons/md";

import p1 from "../assets/img/p-1.jpg";

import {FiClock, FiCheck} from 'react-icons/fi'

//get data

import { catamaran } from "../data";
import { Link } from "react-router-dom";

const Catamaran = () => {
  const stars = (num) => {
    if (num === 1) {
      return (
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    } else if (num === 2) {
      return (
        <div className="flex">
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
        </div>
      );
    } else if (num === 3) {
      return (
        <div className="flex">
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
        </div>
      );
    } else if (num === 4) {
      return (
        <div className="flex">
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
        </div>
      );
    } else if (num === 5) {
      return (
        <div className="flex">
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
          <MdStar className="text-yellow-400" />
        </div>
      );
    }
  };

  return (
    <div className="px-8 bg-blue-300 pt-24 pb-4">
      <h2 className="wrapper-h2 text-[30px] md:text-[60px]">Catamarans</h2>
      <div className="line"></div>
      <div className="flex-col space-y-4 h-full w-screen  md:grid grid-cols-1 xl:grid-cols-2   pr-20 gap-2">
        {catamaran.map((info, key) => {
          return (
            <div className="flex bg-white p-4 rounded-md space-x-4">
              <div>
                {" "}
                <img src={info.img} className="max-h-[300px] max-w-[200px] md:max-w-[350px] " />
              </div>
              <div className="text-lg">
                <h3 className="font-medium pb-1 md:pb-4 text-md md:text-2xl">{info.name}</h3>
                <p className="pb-1 md:pb-4">
                    {stars(3)}
                </p>
                <div className="flex items-center pb-1 md:pb-4 space-x-1">
                 <FiClock />
                  <p>{info.time} hours</p>
                </div>
                <div className="flex items-center space-x-1 pb-1 md:pb-4">
                  <FiCheck />
                  <p>Free Cancellation</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>${info.price}</p>

                    <Link
                    to="/book"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Seat
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catamaran;
