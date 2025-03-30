// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Market
          </Link>
        </li>
        <li>
          <Link to="/submit" className="text-blue-600 hover:text-blue-800">
            Submit Profile
          </Link>
        </li>
        <li>
          <Link to="/create" className="text-blue-600 hover:text-blue-800">
            Create Token
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-blue-600 hover:text-blue-800">
            Review Profiles
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-800">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;