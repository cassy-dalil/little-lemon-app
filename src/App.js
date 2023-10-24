import React from 'react';
import './App.css';
import Home from './components/routes/Home';
import Reservations from './components/routes/Reservations';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </>
  );
}

export default App;
