import { useState } from "react";

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Testimonial from "./components/Testimonial";
// import Yachts from "./components/Yachts";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Packages />
      <Services />
      <Testimonial />
    </div>
  );
}

export default App;
