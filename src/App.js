import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projet from './pages/Projet';
import Contact from './pages/Contact';


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<About />} />
      <Route path="/projet-1" element={<Projet />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  );
};

export default App;
