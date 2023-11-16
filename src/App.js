import React from 'react';
import './App.css';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Login from './components/routes/Login';
import Menu from './components/routes/Menu';
import OrderOnline from './components/routes/OrderOnline';
import Reservations from './components/routes/Reservations';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/orderonline" element={<OrderOnline />}/>
        <Route path="/reservations" element={<Reservations />}/>
      </Routes>
    </>
  );
}

export default App;
