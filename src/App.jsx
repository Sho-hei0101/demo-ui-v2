// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Market from "./components/Market";
import SubmitProfile from "./components/SubmitProfile";
import CreateToken from "./components/CreateToken";
import ReviewProfiles from "./components/ReviewProfiles";
import TokenDetail from "./components/TokenDetail";
import Portfolio from "./components/Portfolio";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/submit" element={<SubmitProfile />} />
        <Route path="/create" element={<CreateToken />} />
        <Route path="/review" element={<ReviewProfiles />} />
        <Route path="/token/:symbol" element={<TokenDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;