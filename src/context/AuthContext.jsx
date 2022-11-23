import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const usersCollectionRef = collection(db, "bookings");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createBooking = async (ref, obj) => {
    await addDoc(ref, obj);
    alert("success");
  };

  

  


useEffect(()=>{
  const getBookings = async () => {
    const data = await getDocs(usersCollectionRef);
    setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getBookings()

},[])

 
  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, bookings, createBooking }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
