// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // darkMode の状態に合わせて、ドキュメントのクラスを更新
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
        <li>
          <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
            Dashboard
          </Link>
        </li>
        {/* 右端にダークモードトグルボタンを追加 */}
        <li className="ml-auto">
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