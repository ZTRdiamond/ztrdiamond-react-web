import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

//page
import AoiTranscriptFunc from './codes/aoi.js-transcript-func';

import '../style/style.css';

function Hastebin() {
  return (
    <div>
      <AoiTranscriptFunc/>
    </div>
  );
}

export default Hastebin;
