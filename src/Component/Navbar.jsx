import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    
    <div id="nav">
      <ul>
      <li><Link to="/" id="l1">Home</Link></li>
      <li><Link to="/About" id="l1">About</Link></li>
      <li><Link to="/Contact" id="l1">Contact</Link></li>
      <li><Link to="/" id="l1">Gallery</Link></li>
      </ul>

    </div>
  )
}
