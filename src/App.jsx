import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import FeedPage from "./containers/FeedPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed-page" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
