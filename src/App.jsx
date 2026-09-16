import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pranayama from "./pages/Pranayama";
import Ashtanga from "./pages/Ashtanga";
import HathaYoga from "./pages/HathaYoga";
import Therapeutic from "./pages/Therapeutic";
import BeginnerYoga from "./pages/BeginnerYoga";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="pt-20">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hatha-yoga" element={<HathaYoga />} />
        <Route path="/ashtanga" element={<Ashtanga />} />
        <Route path="/pranayama" element={<Pranayama />} />
        <Route path="/therapeutic" element={<Therapeutic />} />
        <Route path="/beginner-yoga" element={<BeginnerYoga />} />
      </Routes>
      <Footer />
    </div>
  );
}