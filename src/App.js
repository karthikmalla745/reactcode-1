import "./styles.css";

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}
