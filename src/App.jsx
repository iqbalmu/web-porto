import React from "react";
import Hero from "./page/Hero";
import Navbar from "./components/Navbar";
import About from "./page/About";
import Works from "./page/Works";
import Contact from "./page/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#212529] text-white">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
