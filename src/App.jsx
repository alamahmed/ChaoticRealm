import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomeNEW';
import Tournament from './pages/Tournament';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Tournament /> */}
      {/* <About /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tournament" element={<Tournament />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;