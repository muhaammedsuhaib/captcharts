import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import FeedPage from "./containers/FeedPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-[#F7F7F7]">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
    <Toaster/>
    </div>
  );
}

export default App;
