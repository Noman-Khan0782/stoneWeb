import React from "react";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import  Services  from "./Components/Services";


const App = () => {
  return (
    <>
     <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
     
    </>
  );
};

export default App;
