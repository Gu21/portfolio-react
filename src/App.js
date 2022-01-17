import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Projet from './pages/Projet/Projet';
import Contact from './pages/Contact/Contact';
// import Error from './pages/error/error';

const App = () => {
  return (

    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/history" element={ <About /> } />
      <Route path="/projet-1" element={ <Projet /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/" element={<Navigate  to="/" />} />
      {/* <Route path="*" element={ <Error /> } /> */}
    </Routes>

  );
};

export default App;
