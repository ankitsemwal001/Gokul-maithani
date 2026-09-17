import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Schedule", href: "/schedule" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-linen/90 backdrop-blur-md border-b border-sage/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => handleNav(e, "/")}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <img
              src="/assets/gokul-maithani-yoga-logo-rishikesh.webp"
              alt="Gokul Maithani Yoga Logo"
              width="432"
              height="345"
              decoding="async"
              className="h-9 sm:h-10 w-auto object-contain transition group-hover:scale-105"
            />
            <span className="font-display font-semibold text-base sm:text-lg text-sage-dark tracking-tight">
              Gokul Maithani
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-charcoal/80">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="hover:text-primary-dark transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          onClick={(e) => handleNav(e, "/contact")}
          className="hidden md:inline-flex bg-primary px-5 lg:px-6 py-2.5 rounded-full font-bold text-white text-sm shadow-soft hover:bg-primary-dark hover:-translate-y-0.5 transition"
        >
          Book a Trial Class
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-sage/10 text-sage-dark active:bg-sage/20 transition-colors focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu with Smooth Backdrop */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[4.5rem] bottom-0 bg-linen/98 backdrop-blur-2xl z-50 flex flex-col justify-between border-t border-sage/15 overflow-y-auto px-5 py-6 pb-20 animate-fade-in-up">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3 px-2">
              Menu Navigation
            </div>
            <nav className="flex flex-col gap-1.5 text-base font-medium">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="py-2.5 px-4 rounded-xl text-sage-dark hover:bg-sage/15 active:bg-sage/25 transition font-display font-semibold text-lg flex items-center justify-between"
                  style={{ animationDelay: `${idx * 0.03}s` }}
                >
                  <span>{item.label}</span>
                  <span className="text-sage text-sm opacity-60">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-5 mt-4 border-t border-sage/20 space-y-3.5">
            {/* Direct 1-tap Contact Row */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://wa.me/918979400645"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366]/15 text-[#1E7E34] font-bold text-xs active:scale-95 transition"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+918979400645"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sage/15 text-sage-dark font-bold text-xs active:scale-95 transition"
              >
                <span>📞 Call</span>
              </a>
              <a
                href="https://www.instagram.com/yoga_with_goku"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#E1306C]/10 text-[#C13584] font-bold text-xs active:scale-95 transition"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
                <span>Instagram</span>
              </a>
            </div>

            <a
              href="/contact"
              onClick={(e) => handleNav(e, "/contact")}
              className="w-full btn-primary text-center block py-3.5 shadow-card font-bold text-base"
            >
              Book a Free Trial Class →
            </a>

            <div className="text-center text-xs text-charcoal/60">
              📍 Tapovan, Rishikesh • 📞 +91 89794 00645
            </div>
          </div>
        </div>
      )}
    </header>
  );
}