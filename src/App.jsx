import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Components/Header';
import 'remixicon/fonts/remixicon.css'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { useState } from 'react';

const App = () => {

  const [darkmodeon, setdarkmodeon] = useState(true)

 
  return (
    <div className={`${darkmodeon?'bg-black':'bg-white'}`} >
  <Header darkmodeon={darkmodeon} setdarkmodeon={setdarkmodeon}/>
    <Home darkmodeon={darkmodeon}/>
    <About darkmodeon={darkmodeon}/>
    <Contact darkmodeon={darkmodeon}/>
      </div>
    
  );
};

export default App;
