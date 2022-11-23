

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtgIizcBBoazpEBfjcBDBxiaf0CAYA_d0",
  authDomain: "travel-paradise-7ae27.firebaseapp.com",
  projectId: "travel-paradise-7ae27",
  storageBucket: "travel-paradise-7ae27.appspot.com",
  messagingSenderId: "153080118572",
  appId: "1:153080118572:web:918307e377078e3e148089",
  measurementId: "G-YTHP3W3FZ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app