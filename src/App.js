import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Indexx from "./indexx";
import Caarpoling from "./Caarpoling";
import React from "react";
import Books from "./books";
import Swaps from "./swaps";
import Hostels from "./hostels";
import Questions from "./questions";
import Login from "./login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/indexx" element={<Indexx />} />
          <Route path="/" element={<Indexx />} />
          <Route path="/Caarpoling" element={<Caarpoling />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/swaps" element={<Swaps />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
