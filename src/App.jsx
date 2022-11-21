import { useState } from "react";
import Home from "./components/Home";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Destination from "./pages/Destination";
import Contact from "./components/Contact";
import Faq from "./pages/Faq";
import { Book } from "./pages/Book";
import Blog from "./components/Blog";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";

// import Yachts from "./components/Yachts";

function App() {
  return (
 <BrowserRouter>
 <Navbar />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="destination" element={<Destination />} />
    <Route exact path="/faq" element={<Faq />} />
    <Route exact path="/blog" element={<Blogs />} />
    <Route exact path="/book" element={<Book />} />
    <Route exact path="/contact" element={<Contact />} />
  </Routes>
 </BrowserRouter>
  );
}

export default App;
