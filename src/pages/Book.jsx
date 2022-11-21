import React, { useState } from "react";

import book from "../assets/img/book.png";

export const Book = () => {
  const [destination, setDestination] = useState("Country");
  const [boatType, setBoatType] = useState("Boat Type");
  const [charterType,setCharterType] = useState('Charter type')
  const [amount,setAmount] = useState(1)
  const [departure,setDeparture] = useState("")
  const [arrival,setArrival] = useState("")

  return (
    <div div className="h-full w-screen bg-gray-900 overflow-hidden ">
      <h2 className="text-4xl font-bold pt-8 text-center text-blue-300 ">
        Book Your Destination
      </h2>
      <section className="block  lg:flex  h-full w-screen bg-gray-900 justify-evenly py-16">
        <div>
          <img
            src="https://img.freepik.com/free-photo/starry-sky-mountain-background-nature-remixed-media_53876-128641.jpg?w=996&t=st=1668947143~exp=1668947743~hmac=a66eff468df34f00e32940f90e64bafd326bc2f55ee3f33abc8a024524fb1166"
            className="max-w-2xl shadow-lg shadow-black cursor-pointer hover:scale-105 duration-300 "
          />
        </div>
        <div className="w-full max-w-xs m-8 mb-0 lg:mt-0">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Destination
              </label>

              <div className="group w-full z-50 b inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none shadow border w-full  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                >
                  <span className="flex  justify-between">{destination}</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu"
                  aria-hidden="true"
                  className="bg-gray-900 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                >
                  <li className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Greece</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-gray-900 border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Athens
                      </li>
                      <li className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                        Cyclades
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Mykonos
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Santorini
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Dodecanese
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">Kos</li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Rhodes
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Samos
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Ionian
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Lefkas
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Sporades
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Volos
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Skiathos
                      </li>
                    </ul>
                  </li>

                  <li className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Italy</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-gray-900 border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Sicily
                      </li>
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Ligurai
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Sardinia
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Tyrrhenian Sea
                      </li>
                    </ul>
                  </li>
                  <li className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Croatia</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-gray-900 border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Dubrovnik
                      </li>
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Istra
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Kvarner
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Sibenik
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Split
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Zadar
                      </li>
                    </ul>
                  </li>

                  <li className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Caribbean</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-gray-900 border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Bahamas
                      </li>
                      <li className="px-3 py-1 list hover:bg-blue-500">
                        Python
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        Jamaica
                      </li>
                      <li className="px-3 list py-1 hover:bg-blue-500">
                        British Virgin Island
                      </li>
                    </ul>
                  </li>

                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Norway
                  </li>

                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Mauritius
                  </li>
                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Maldives
                  </li>
                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Baleric Island
                  </li>

                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    United States Virgin Island
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Boat Type
              </label>

              <div className="group w-full z-50 b inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none shadow border w-full  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                >
                  <span className="flex  justify-between">{boatType}</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu"
                  aria-hidden="true"
                  className="bg-gray-900 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                >
                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Catamaran
                  </li>

                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Yacht
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between">



            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Charter Type
              </label>

              <div className="group w-full z-50 b inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none shadow border w-full  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                >
                  <span className="flex  justify-between">{charterType}</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu"
                  aria-hidden="true"
                  className="bg-gray-900 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                >
                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Bareboat
                  </li>

                  <li className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Skippered
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                NO. of People
              </label>
              <input
                className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="1"
              />
            </div>

            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Departure
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="Date"
                placeholder="Where to?"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Arrival
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="date"
                placeholder="Where to?"
              />
            </div>
            
            <div className="flex justify-center">
              <button className="px-4 bg-blue-500 rounded-md text-lg text-white py-2">
                Book Now
              </button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2022 Traveltheparadise. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
