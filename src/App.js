import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import Footer from './components/Footer.js';

// import {Route, Routes} from "react-route-dom";

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <Header />
        <HeroSection />
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
