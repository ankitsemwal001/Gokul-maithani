import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pranayama from "./pages/Pranayama";
import Ashtanga from "./pages/Ashtanga";
import HathaYoga from "./pages/HathaYoga";
import Therapeutic from "./pages/Therapeutic";
import BeginnerYoga from "./pages/BeginnerYoga";
import VinyasaYoga from "./pages/VinyasaYoga";
import AlignmentMobility from "./pages/AlignmentMobility";

export const SECTION_ROUTES = {
  "/schedule": "schedule",
  "/yoga-classes-schedule-rishikesh": "schedule",
  "/yoga-schedule-rishikesh": "schedule",
  "/about": "about",
  "/about-yogi-gokul-maithani": "about",
  "/classes": "classes",
  "/yoga-classes-in-rishikesh": "classes",
  "/yoga-courses-rishikesh": "classes",
  "/pricing": "pricing",
  "/yoga-classes-fees-rishikesh": "pricing",
  "/yoga-pricing-rishikesh": "pricing",
  "/gallery": "gallery",
  "/yoga-studio-gallery-rishikesh": "gallery",
  "/faq": "faq",
  "/yoga-faqs-rishikesh": "faq",
  "/contact": "contact",
  "/contact-yoga-teacher-rishikesh": "contact",
  "/book-trial-yoga-class": "contact",
};

const LEGACY_REDIRECTS = {
  // Old short class slugs -> keyword-rich SEO slugs
  "/hatha-yoga": "/hatha-yoga-rishikesh",
  "/ashtanga": "/ashtanga-yoga-rishikesh",
  "/pranayama": "/pranayama-meditation-rishikesh",
  "/therapeutic": "/therapeutic-yoga-rishikesh",
  "/beginner-yoga": "/beginner-yoga-rishikesh",
  "/vinyasa": "/vinyasa-yoga-rishikesh",
  "/alignment-mobility": "/alignment-mobility-yoga-rishikesh",
  // Legacy HTML pages -> new slugs
  "/home": "/",
  "/home.html": "/",
  "/index.html": "/",
  "/hatha-yoga.html": "/hatha-yoga-rishikesh",
  "/ashtanga.html": "/ashtanga-yoga-rishikesh",
  "/pranayama.html": "/pranayama-meditation-rishikesh",
  "/therapeutic.html": "/therapeutic-yoga-rishikesh",
  "/beginner-yoga.html": "/beginner-yoga-rishikesh",
  // Legacy pages/ folder -> new slugs
  "/pages/home.html": "/",
  "/pages/index.html": "/",
  "/pages/hatha-yoga.html": "/hatha-yoga-rishikesh",
  "/pages/ashtanga.html": "/ashtanga-yoga-rishikesh",
  "/pages/pranayama.html": "/pranayama-meditation-rishikesh",
  "/pages/therapeutic.html": "/therapeutic-yoga-rishikesh",
  "/pages/beginner-yoga.html": "/beginner-yoga-rishikesh",
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL has a legacy hash (e.g. /#schedule), convert to clean URL
    if (hash && hash.startsWith("#")) {
      const cleanTarget = `/${hash.substring(1)}`;
      if (SECTION_ROUTES[cleanTarget]) {
        window.history.replaceState(null, "", cleanTarget);
      }
      const el = document.querySelector(hash);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        return;
      }
    }

    // If URL is a section path (e.g. /schedule, /about, /contact)
    const targetSectionId = SECTION_ROUTES[pathname];
    if (targetSectionId) {
      const el = document.getElementById(targetSectionId);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        return;
      }
    }

    // Default: scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function LegacyRedirect() {
  const location = useLocation();
  const cleanPath =
    location.pathname.length > 1 && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;
  const target = LEGACY_REDIRECTS[cleanPath];
  if (target && target !== cleanPath) {
    return <Navigate to={target + location.hash} replace />;
  }
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <div className="pt-18 sm:pt-20">
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Main Home & Clean Section URLs */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/about-yogi-gokul-maithani" element={<Home />} />
        <Route path="/classes" element={<Home />} />
        <Route path="/yoga-classes-in-rishikesh" element={<Home />} />
        <Route path="/yoga-courses-rishikesh" element={<Home />} />
        <Route path="/schedule" element={<Home />} />
        <Route path="/yoga-classes-schedule-rishikesh" element={<Home />} />
        <Route path="/yoga-schedule-rishikesh" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/yoga-classes-fees-rishikesh" element={<Home />} />
        <Route path="/yoga-pricing-rishikesh" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/yoga-studio-gallery-rishikesh" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/yoga-faqs-rishikesh" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/contact-yoga-teacher-rishikesh" element={<Home />} />
        <Route path="/book-trial-yoga-class" element={<Home />} />

        {/* Dedicated Course Detail Pages with High-Ranking Slugs */}
        <Route path="/hatha-yoga-rishikesh" element={<HathaYoga />} />
        <Route path="/ashtanga-yoga-rishikesh" element={<Ashtanga />} />
        <Route path="/pranayama-meditation-rishikesh" element={<Pranayama />} />
        <Route path="/therapeutic-yoga-rishikesh" element={<Therapeutic />} />
        <Route path="/beginner-yoga-rishikesh" element={<BeginnerYoga />} />
        <Route path="/vinyasa-yoga-rishikesh" element={<VinyasaYoga />} />
        <Route path="/alignment-mobility-yoga-rishikesh" element={<AlignmentMobility />} />

        {/* Catch-all for redirects */}
        <Route path="*" element={<LegacyRedirect />} />
      </Routes>
      <Footer />
    </div>
  );
}