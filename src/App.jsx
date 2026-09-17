import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Componet/Home";
import About from "./Componet/About";
import Service from "./Componet/Service";
import Blog from "./Componet/Blog";
import Contact from "./Componet/Contact";
import Portfolio from "./Componet/Portfolio";
import Blogpage from "./Componet/Blogpage";
import LegalPage from "./Componet/LegalPage";
import ScrollToTop from "./Componet/ScrollToTop";
import ScrollAnimationObserver from "./Componet/ScrollAnimationObserver";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollAnimationObserver />
      <div className="app-container">
        <NavBar />
        <main className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogpage" element={<Blogpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/privacy-policy" element={<LegalPage pageKey="privacy-policy" />} />
            <Route path="/terms-of-service" element={<LegalPage pageKey="terms-of-service" />} />
            <Route path="/security" element={<LegalPage pageKey="security" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
