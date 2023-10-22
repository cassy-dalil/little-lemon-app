import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import Specials from './components/Specials';
import Footer from './components/Footer.js';
import Testimonials from './components/Testimonials';
import About from './components/About';

// import {Route, Routes} from "react-route-dom";

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <Header />
        <HeroSection />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </React.Fragment>
      {/* <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
