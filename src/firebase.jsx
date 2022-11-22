// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtgIizcBBoazpEBfjcBDBxiaf0CAYA_d0",
  authDomain: "travel-paradise-7ae27.firebaseapp.com",
  projectId: "travel-paradise-7ae27",
  storageBucket: "travel-paradise-7ae27.appspot.com",
  messagingSenderId: "153080118572",
  appId: "1:153080118572:web:918307e377078e3e148089",
  measurementId: "G-YTHP3W3FZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app