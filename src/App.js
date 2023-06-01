import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';

//page
import Test from './pages/test';
import HomePage from './pages/HomePage';
import Game from './pages/miner';
import Hastebin from './pages/hastebin';

import './style/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/miner' element={<Game/>} />
          <Route path='/code/aoi.js-transcript-func' element={<Hastebin/>} />
        </Routes>
        <br/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;