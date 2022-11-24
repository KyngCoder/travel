import { useState } from "react";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Contact from "./components/Contact";
import Faq from "./pages/Faq";
import { Book } from "./pages/Book";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Catamaran from "./pages/Catamarans";
import Info from "./pages/Info";
import Admin from "./admin";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route path="/info" exact element={
          <Admin>
            <Info />
          </Admin>
        } />
        <Route
          exact
          path="destination"
          element={
            <ProtectedRoute>
              <Destination />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/faq"
          element={
       
              <Faq />
         
          }
        />
        <Route
          exact
          path="/blog"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/book"
          element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/catamaran"
          element={
            <ProtectedRoute>
              <Catamaran />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/contact"
          element={
        
              <Contact />
       
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
