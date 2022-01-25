import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import  Projets from '../../pages/Projets/Projets';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/About" element={ <About /> } />
      <Route path="/projets" element={ <Projets /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="*" element={<Navigate  to="/" replace />} />
    </Routes>
    </BrowserRouter>
    </div>

    
  );
}

export default App;
