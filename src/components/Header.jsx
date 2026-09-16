import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Classes", href: "/#classes" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-linen/80 backdrop-blur border-b border-sage/15">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/#hero"
            onClick={(e) => handleNav(e, "/#hero")}
            className="flex items-center gap-3"
          >
            <img
              src="/assets/logo.png"
              alt="Gokul Maithani Yoga Logo"
              className="h-10 w-auto object-contain"
            />
            <h1 className="hidden lg:block font-display font-semibold text-lg text-sage-dark">
              Gokul Maithani
            </h1>
          </a>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-charcoal/80">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="hover:text-primary-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          onClick={(e) => handleNav(e, "/#contact")}
          className="hidden md:inline-flex bg-primary px-6 py-2.5 rounded-full font-bold text-white shadow-soft hover:bg-primary-dark hover:-translate-y-0.5 transition"
        >
          Book a Trial Class
        </a>

        <button
          className="md:hidden text-2xl text-sage-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-linen border-t border-sage/15">
          <nav className="flex flex-col px-6 py-6 gap-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => handleNav(e, item.href)}>
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNav(e, "/#contact")}
              className="mt-4 bg-primary py-3 rounded-full font-bold text-white text-center"
            >
              Book a Trial Class
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}