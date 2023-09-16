import React from 'react';
import './App.css';
import './components/Header.js';
import './components/Main.js';
import './components/Footer.js';

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
