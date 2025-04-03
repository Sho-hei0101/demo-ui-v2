import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link to="/market" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Market
          </Link>
        </li>
        <li>
          <Link to="/submit" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Submit Profile
          </Link>
        </li>
        <li>
          <Link to="/create" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Create Token
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Review Profiles
          </Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                Portfolio
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/feedback" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/feedback-dashboard" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Feedback Dashboard
          </Link>
        </li>
        <li>
          <Link to="/activity" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Activity
          </Link>
        </li>
        <li>
          <Link to="/news" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            News
          </Link>
        </li>
        <li className="ml-auto flex items-center space-x-2">
          {user ? (
            <button onClick={logout} className="px-3 py-1 border rounded dark:border-gray-600">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 border rounded dark:border-gray-600 text-blue-600 hover:text-blue-800"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded dark:border-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;