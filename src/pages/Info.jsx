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

function Info() {

  const {bookings} = UserAuth()

  console.log(bookings)

  return (
    <div className="bg-gray-900 pt-28">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Destination
              </th>
              <th scope="col" className="py-3 px-6">
               Name
              </th>

              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Boat Type
              </th>
              <th scope="col" className="py-3 px-6">
                Charter Type
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Phone
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {bookings?.map((book,index ) => {
            return (
              <tbody key={index}>
                <tr
                  className={
                    index % 2 === 0
                      ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      : "bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                  }
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex space-x-2">
                      
                      <div>
                        <p>{book.destination}</p>
                        
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">{book.name}</td>
                  <td
                    className={
                    
                        "text-white py-4 px-6"
                    }
                  >
                 {book.amount}
                  </td>
                  <td
                    className={
                      
                        "text-white py-4 px-6"
                    }
                  >
                    {book.boatType}
                  </td>
                  <td className="py-4 px-6">{book.charterType}</td>
                  <td className="py-4 px-6">{book?.email}</td>
                  <td className="py-4 px-6">{book?.phone}</td>
                  <td className="py-4 px-6">
                   
                      <button onClick={()=>{}} className="font-medium border-4 shadow-md rounded-md border-red-600 px-2 py-1.5 text-center">
                        Delete
                      </button>
                    
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Info;
