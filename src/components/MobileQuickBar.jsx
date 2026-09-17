import React from "react";
import { Link } from "react-router-dom";

export default function MobileQuickBar() {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-sage/20 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2.5">
        {/* Call Button */}
        <a
          href="tel:+918979400645"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-sage/10 text-sage-dark hover:bg-sage/20 active:scale-95 transition min-w-[62px]"
          aria-label="Call Yogi Gokul Maithani"
        >
          <span className="text-base leading-none mb-0.5">📞</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918979400645?text=Hello%20Yogi%20Gokul%20Maithani,%20I%20want%20to%20inquire%20about%20Yoga%20Classes."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs active:scale-95 transition shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>WhatsApp</span>
        </a>

        {/* Book Trial Button */}
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-primary text-white font-bold text-xs active:scale-95 transition shadow-sm text-center"
        >
          <span>Book Trial</span>
          <span className="text-sm">→</span>
        </Link>
      </div>
    </aside>
  );
}
