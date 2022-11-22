import React from 'react'

import { packages } from "../data";

const Destination = () => {
  console.log(packages[0].country[0])
  return (
    <div className="h-full  overflow-x-hidden w-screen bg-blue-300 p-8">
    <h2 className="text-4xl text-center mt-20 text-white">
      Choose Where you would like to visit
    </h2>
    <h3 className='text-2xl font-semibold text-gray-900'>Greece</h3>
      <div className="place-items-center md:place-items-start h-full w-screen pt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:pr-16  gap-2">
    {packages[0].country[0].Greece.map((info, key) => {
      console.log("info",info)
      return (
        <div
          key={`${info.name} ${key}`}
          className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white relative"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg brightness-75"
              src={info.img}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5 ">
            <a href="#" className="flex justify-center space-x-1">
      
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white absolute bottom-1/2">
                {info.name}
              </h5>
            </a>
         
         
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${info.price}
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

    <h3 className='text-2xl font-semibold text-gray-900'>Croatia</h3>
      <div className="place-items-center md:place-items-start h-full w-screen pt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:pr-16  gap-2">
    {packages[0].country[0].Greece.map((info, key) => {
      console.log("info",info)
      return (
        <div
          key={`${info.name} ${key}`}
          className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white relative"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg brightness-75"
              src={info.img}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5 ">
            <a href="#" className="flex justify-center space-x-1">
      
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white absolute bottom-1/2">
                {info.name}
              </h5>
            </a>
         
         
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${info.price}
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

    <h3 className='text-2xl font-semibold text-gray-900'>Italy</h3>
      <div className="place-items-center md:place-items-start h-full w-screen pt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:pr-16  gap-2">
    {packages[0].country[0].Italy.map((info, key) => {
      console.log("info",info)
      return (
        <div
          key={`${info.name} ${key}`}
          className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white relative"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg brightness-75"
              src={info.img}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5 ">
            <a href="#" className="flex justify-center space-x-1">
      
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white absolute bottom-1/2">
                {info.name}
              </h5>
            </a>
         
         
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${info.price}
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

    <h3 className='text-2xl font-semibold text-gray-900'>Caribbean</h3>
      <div className="place-items-center md:place-items-start h-full w-screen pt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:pr-16  gap-2">
    {packages[0].country[0].Caribbean.map((info, key) => {
      console.log("info",info)
      return (
        <div
          key={`${info.name} ${key}`}
          className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-white relative"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg brightness-75"
              src={info.img}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5 ">
            <a href="#" className="flex justify-center space-x-1">
      
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white absolute bottom-1/2">
                {info.name}
              </h5>
            </a>
         
         
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${info.price}
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
    
  )
}

export default Destination