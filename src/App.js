import React from 'react';
import './App.css';
import './components/Header';
import './components/Main';
import './components/Footer';

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
