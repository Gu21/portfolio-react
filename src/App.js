import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Projet from './pages/Projet/Projet';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (

    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/history" element={ <About /> } />
      <Route path="/projet-1" element={ <Projet /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>

  );
};

export default App;
