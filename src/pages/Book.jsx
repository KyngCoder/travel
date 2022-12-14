import { useState, useEffect } from "react";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { UserAuth } from '../context/AuthContext';

export const Book = () => {

  

  const [destination,setDestination] = useState('country')
  const [boatType,setBoatType] = useState('yacht')
  const [charterType,setCharterType] = useState('charter type')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')
  const [amount,setAmount] = useState(1)
  const [name,setName] = useState('')
  const usersCollectionRef = collection(db, "bookings");

  const {createBooking} = UserAuth()
 
  const addBookings = (e) => {
    e.preventDefault()
    console.log(telephone)
    createBooking(usersCollectionRef,{destination: destination,boatType:boatType,charterType:charterType,telephone:telephone,email:email,amount:Number(amount),name: name})
    setName(' ')
    setTelephone(' ')
    setDestination('country ')
    setCharterType('charterType ')
    setBoatType('boatType ')
    setAmount(' ')
    setEmail(' ')
  }

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
          <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  className="bg-gray-900 z-20 text-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
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
                      <li onClick={()=>setDestination('Athens')} className="px-3 py-1 list hover:bg-blue-500">
                        Athens
                      </li>
                      <li onClick={()=>setDestination('Cyclades')} className="rounded-sm list relative px-3 py-1 hover:bg-blue-500">
                        Cyclades
                      </li>
                      <li onClick={()=>setDestination('Mykonos')} className="px-3 list py-1 hover:bg-blue-500">
                        Mykonos
                      </li>
                      <li onClick={()=>setDestination('Santorini')} className="px-3 list py-1 hover:bg-blue-500">
                        Santorini
                      </li>
                      <li onClick={()=>setDestination('Dodecanese')} className="px-3 list py-1 hover:bg-blue-500">
                        Dodecanese
                      </li>
                      <li onClick={()=>setDestination('Kos')} className="px-3 list py-1 hover:bg-blue-500">Kos</li>
                      <li onClick={()=>setDestination('Rhodes')} className="px-3 list py-1 hover:bg-blue-500">
                        Rhodes
                      </li>
                      <li onClick={()=>setDestination('Samos')} className="px-3 list py-1 hover:bg-blue-500">
                        Samos
                      </li>
                      <li onClick={()=>setDestination('Ionian')} className="px-3 list py-1 hover:bg-blue-500">
                        Ionian
                      </li>
                      <li onClick={()=>setDestination('Lefkas')} className="px-3 list py-1 hover:bg-blue-500">
                        Lefkas
                      </li>
                      <li onClick={()=>setDestination('Sporades')} className="px-3 list py-1 hover:bg-blue-500">
                        Sporades
                      </li>
                      <li onClick={()=>setDestination('Volos')} className="px-3 list py-1 hover:bg-blue-500">
                        Volos
                      </li>
                      <li onClick={()=>setDestination('Skiathos')} className="px-3 list py-1 hover:bg-blue-500">
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
                      <li onClick={()=>setDestination('Sicily')} className="px-3 py-1 list hover:bg-blue-500">
                        Sicily
                      </li>
                      <li  onClick={()=>setDestination("Liguria")}  className="px-3 py-1 list hover:bg-blue-500">
                        Liguria
                      </li>
                      <li onClick={()=>setDestination('Sardinia')} className="px-3 list py-1 hover:bg-blue-500">
                        Sardinia
                      </li>
                      <li onClick={()=>setDestination('Tyrrhenian Sea')} className="px-3 list py-1 hover:bg-blue-500">
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
                      <li  onClick={()=>setDestination('Dubrovnik')}  className="px-3 py-1 list hover:bg-blue-500">
                        Dubrovnik
                      </li>
                      <li  onClick={()=>setDestination('Istra')}  className="px-3 py-1 list hover:bg-blue-500">
                        Istra
                      </li>
                      <li onClick={()=>setDestination('Kvarner')} className="px-3 list py-1 hover:bg-blue-500">
                        Kvarner
                      </li>
                      <li onClick={()=>setDestination('Sibenik')} className="px-3 list py-1 hover:bg-blue-500">
                        Sibenik
                      </li>
                      <li onClick={()=>setDestination('Split')} className="px-3 list py-1 hover:bg-blue-500">
                        Split
                      </li>
                      <li onClick={()=>setDestination('Zadar')} className="px-3 list py-1 hover:bg-blue-500">
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
                      <li  onClick={()=>setDestination('Bahamas')}  className="px-3 py-1 list hover:bg-blue-500">
                        Bahamas
                      </li>
                    
                      <li onClick={()=>setDestination('Jamaica')} className="px-3 list py-1 hover:bg-blue-500">
                        Jamaica
                      </li>
                      <li onClick={()=>setDestination('British Virgin Island')} className="px-3 list py-1 hover:bg-blue-500">
                        British Virgin Island
                      </li>
                    </ul>
                  </li>

                  <li   onClick={()=>setDestination('Norway')}  className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Norway
                  </li>

                  <li  onClick={()=>setDestination('Mauritius')}  className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Mauritius
                  </li>
                  <li  onClick={()=>setDestination('Maldives')}  className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Maldives
                  </li>
                  <li  onClick={()=>setDestination('Baleric Island')}  className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Baleric Island
                  </li>

                  <li onClick={()=>setDestination('United States Virgin Island')} className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    United States Virgin Island
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
                      className="fill-current -z-50 h-4 w-4 transform group-hover:-rotate-180
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
                  <li onClick={()=>setBoatType('Catamaran')} className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Catamaran
                  </li>

                  <li onClick={()=>setBoatType('Yacht')} className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Yacht
                  </li>
                </ul>
              </div>
            </div>

<div className="mb-4 w-28">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Name"
                name="from_name"
                onChange={(e)=>setName(e.target.value)}
              />
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
                  <li onClick={()=>setCharterType('Bareboat')} className="rounded-sm px-3 list py-1 hover:bg-blue-500">
                    Bareboat
                  </li>

                  <li onClick={()=>setCharterType('Skippered')} className="rounded-sm px-3 list py-1 hover:bg-blue-500">
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
                name="num"
                onChange={(e)=>setAmount(e.target.value)}
              />
            </div>

            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Phone NO.
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="tel"
                placeholder="Enter #"
                name="departure"
                onChange={(e)=>setTelephone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            
            <div className="flex justify-center">
              <button type="submit" onClick={addBookings} className="px-4 bg-blue-500 rounded-md text-lg text-white py-2">
                Book Now
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Traveltheparadise. All rights reserved.
          </p>
        </div>
      </section>
    
    </div>
  );
};
