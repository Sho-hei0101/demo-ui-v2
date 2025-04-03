import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Market from "./components/Market";
import SubmitProfile from "./components/SubmitProfile";
import CreateToken from "./components/CreateToken";
import ReviewProfiles from "./components/ReviewProfiles";
import TokenDetail from "./components/TokenDetail";
import Portfolio from "./components/Portfolio";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Feedback from "./components/Feedback";
import FeedbackDashboard from "./components/FeedbackDashboard";
import ActivityFeed from "./components/ActivityFeed";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/market" element={<Market />} />
        <Route path="/submit" element={<SubmitProfile />} />
        <Route path="/create" element={<CreateToken />} />
        <Route path="/review" element={<ReviewProfiles />} />
        <Route path="/token/:symbol" element={<TokenDetail />} />
        <Route path="/portfolio" element={<PrivateRoute><Portfolio /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-dashboard" element={<FeedbackDashboard />} />
        <Route path="/activity" element={<ActivityFeed />} />
        <Route path="/news" element={<NewsFeed />} />
      </Routes>
    </Router>
  );
}

export default App;