import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="Navigation-site">
      <ul>
        <li><a href="/home#home">Home</a></li>
        <li><a href="/home#about">About</a></li>
        <li><a href="/home#menu">Menu</a></li>
        <li><Link to="/Booking">Reservations</Link></li>
        <li><a href="/home#review">Reviews</a></li>
        <li><a href="/home#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;