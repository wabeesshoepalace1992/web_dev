import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Edu from './components/Edu/Edu';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
function App() {
  return (
    <div>
      <Home />
      <About />
      <Edu />
      <Project />
      <Contact />

    </div>
  );
}

export default App;
