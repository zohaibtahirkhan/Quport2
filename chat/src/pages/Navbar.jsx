// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">Chat-1</Link></li>
        <li><Link to="/chat-2">Chat-2</Link></li>
        <li><Link to="/chat-3">Chat-3</Link></li>
        <li><Link to="/chat-4">Chat-4</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
