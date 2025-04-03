import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to ATHLX</h1>
      <p className="text-xl mb-8 max-w-xl text-center">
        Tokenize your favorite athletes and trade them in a dynamic, simulated market.
      </p>
      <Link
        to="/market"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-200 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Landing;