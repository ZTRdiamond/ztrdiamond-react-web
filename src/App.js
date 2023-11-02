// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

//custom components
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';
import NotFoundPage from './components/Page404';

//page
import HomePage from './pages/HomePage';
import './style/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        <br/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;