import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
    </Router>
  );
}

export default App;
