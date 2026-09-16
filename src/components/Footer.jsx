import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white/80 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/logo.png"
                alt="Gokul Maithani Yoga Logo"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-white font-display font-semibold text-lg">
                Yogi Gokul Maithani
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">
              Dedicated to providing authentic Hatha yoga practices that nourish
              the soul and strengthen the body. Join our mindful community.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yoga_with_goku?igsh=MTNyNTY0OHZpdTNyZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-white"></i>
              </a>

              <a
                href="mailto:Maithanigoku@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope text-white"></i>
              </a>

              <a
                href="https://wa.me/918979400645"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Our Practice
            </h3>
            <p className="text-white/60 leading-relaxed">
              Experience authentic yoga in the spiritual city of Rishikesh. Our
              classes focus on mindfulness, strength, and inner balance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#classes" className="hover:text-primary transition">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/#schedule" className="hover:text-primary transition">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Visit Us
            </h3>
            <p className="text-white/60 mb-3">Uttarakhand, Rishikesh</p>
            <p className="text-white/60 mb-2">maithanigoku@gmail.com</p>
            <p className="text-white/60">+91 89794 00645</p>
          </div>
        </div>

        <div className="py-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Yogi Gokul Maithani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}