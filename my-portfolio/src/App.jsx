import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MoreAboutMe from "./Pages/MoreAboutMe";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <Header /> {/* This will always be visible */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MoreAboutMe" element={<MoreAboutMe />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer /> {/* This will also always be visible */}
    </Router>
  );
}

export default App;
