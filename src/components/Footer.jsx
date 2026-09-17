import React from "react";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer className="relative bg-sage-deep text-white/80 pt-16 sm:pt-20 pb-8 overflow-hidden">
      {/* ================= BACKGROUND IMAGES & SPIRITUAL ELEMENTS ================= */}
      
      {/* Left Yogi Image Blended in Background */}
      <div className="absolute bottom-0 left-0 lg:left-4 w-44 sm:w-80 md:w-96 pointer-events-none select-none -z-0 opacity-20 lg:opacity-25 mix-blend-luminosity filter saturate-0">
        <img
          src="/assets/gokul-maithani-yoga-teacher-portrait-rishikesh.webp"
          alt=""
          aria-hidden="true"
          width="861"
          height="834"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_40%,transparent_100%)] [mask-image:-webkit-linear-gradient(to_top,rgba(0,0,0,1)_40%,transparent_100%)]"
        />
      </div>

      {/* Right Yogi Pose Blended in Background */}
      <div className="absolute bottom-0 right-0 lg:right-4 w-44 sm:w-80 md:w-96 pointer-events-none select-none -z-0 opacity-15 lg:opacity-20 mix-blend-luminosity filter saturate-0">
        <img
          src="/assets/bakasana-crow-pose-yoga-rishikesh.webp"
          alt=""
          aria-hidden="true"
          width="864"
          height="774"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-bottom [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_40%,transparent_100%)] [mask-image:-webkit-linear-gradient(to_top,rgba(0,0,0,1)_40%,transparent_100%)]"
        />
      </div>

      {/* Center Sacred Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] aspect-square pointer-events-none select-none opacity-[0.04] text-white animate-spin-slow -z-0">
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="200" cy="200" r="190" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="160" />
          <circle cx="200" cy="200" r="130" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="100" />
          <circle cx="200" cy="200" r="70" strokeDasharray="4 2" />
          <circle cx="200" cy="200" r="40" />
          {[...Array(12)].map((_, i) => (
            <path
              key={`fp1-${i}`}
              d="M 200 40 C 215 100, 235 150, 200 200 C 165 150, 185 100, 200 40 Z"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <path
              key={`fp2-${i}`}
              d="M 200 100 C 210 140, 220 170, 200 200 C 180 170, 190 140, 200 100 Z"
              transform={`rotate(${i * 45 + 22.5} 200 200)`}
            />
          ))}
          <path d="M 10 200 L 390 200 M 200 10 L 200 390" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img
                src="/assets/gokul-maithani-yoga-logo-rishikesh.webp"
                alt="Gokul Maithani Yoga Logo"
                width="432"
                height="345"
                loading="lazy"
                decoding="async"
                className="w-9 sm:w-10 h-9 sm:h-10 object-contain"
              />
              <h3 className="text-white font-display font-semibold text-lg sm:text-xl">
                Yogi Gokul Maithani
              </h3>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Dedicated to authentic Himalayan yogic traditions, alignment biomechanics, and mindful inner peace in Rishikesh, India.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/yoga_with_goku?igsh=MTNyNTY0OHZpdTNyZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition text-white text-sm"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="mailto:Maithanigoku@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition text-white text-sm"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>

              <a
                href="https://wa.me/918979400645"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition text-white text-sm"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Practice Focus */}
          <div>
            <h4 className="text-white font-display font-semibold text-base sm:text-lg mb-3 sm:mb-5">
              Our Practice
            </h4>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Traditional Hatha, dynamic Ashtanga Vinyasa, Pranayama breathwork, and healing Therapeutic Yoga designed for longevity and mindfulness.
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary text-xs font-semibold">
              Rishikesh, Tapovan Studio
            </span>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-base sm:text-lg mb-3 sm:mb-5">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Gokul
                </Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-primary transition">
                  Transformative Classes
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-primary transition">
                  Weekly Schedule
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Book a Trial Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-display font-semibold text-base sm:text-lg mb-3 sm:mb-5">
              Visit &amp; Connect
            </h4>
            <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-2.5 flex items-start gap-2.5">
              <span className="text-primary mt-0.5 shrink-0">📍</span>
              <span>Tapovan, Rishikesh, Uttarakhand 249192, India</span>
            </p>
            <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-2.5 flex items-center gap-2.5">
              <span className="text-primary shrink-0">✉️</span>
              <a href="mailto:Maithanigoku@gmail.com" className="hover:text-primary transition break-all">
                Maithanigoku@gmail.com
              </a>
            </p>
            <p className="text-white/70 text-xs sm:text-sm flex items-center gap-2.5">
              <span className="text-primary shrink-0">📞</span>
              <a href="https://wa.me/918979400645" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                +91 89794 00645
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 sm:pt-8 mt-2 sm:mt-4 text-center text-white/40 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p>© {new Date().getFullYear()} Yogi Gokul Maithani. All rights reserved.</p>
          <p className="text-white/30 text-xs">Crafted with Mindfulness in Rishikesh, India</p>
        </div>
      </div>
    </footer>
  );
}