import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
