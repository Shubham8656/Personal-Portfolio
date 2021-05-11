import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Work/>
      <Skills/>
      <Experience/>
      <br></br>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
