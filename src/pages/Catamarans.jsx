import React from "react";

import { MdLocationPin, MdStar } from "react-icons/md";

import p1 from "../assets/img/p-1.jpg";

//get data

import { catamaran } from "../data";

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
    <div className="px-8 bg-blue-300 pt-24 pb-4" >
      <h2 className="wrapper-h2">Catamarans</h2>
      <div className="line"></div>
      <div className=" h-full w-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pr-20 gap-2">
        {catamaran.map((info, key) => {
          return (
            <div
              key={`${info.name} ${key}`}
              className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={info.img}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="flex items-center space-x-1">
                  <MdLocationPin />
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {info.name}
                  </h5>
                </a>
                <p>{info.description}</p>
                <div className="flex items-center mt-2.5 mb-5">
                  {stars(info.rating)}

                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {`${info.rating}.0`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {info.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Seat
                  </a>
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
