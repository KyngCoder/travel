import React from 'react'

import Landing from "./Landing";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import Packages from "./Packages";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Brand from "./Brand";
import CTA from "./CTA";

import Footer from "./Footer";
import Social from "./Social";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
  
    <Landing />
    <Packages />
    <Services />
    <Gallery />
    <Testimonial />
    <Blog />
    <Brand />
    <CTA />
    <Contact />
    <Footer />
    <Social />
  </div>
  )
}

export default Home