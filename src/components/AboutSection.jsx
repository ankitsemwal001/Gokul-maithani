import React from "react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    title: "Certified Yoga Trainer",
    desc: "Professional certification in traditional Hatha and modern Vinyasa styles.",
    bgColor: "bg-[#E5ECE7]",
    textColor: "text-sage-dark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Personalized Guidance",
    desc: "Tailored sessions that respect and challenge your unique body mechanics.",
    bgColor: "bg-[#F7EBE1]",
    textColor: "text-[#B36846]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    title: "Focus on Breath & Posture",
    desc: "Deep emphasis on alignment and pranayama for lasting internal peace.",
    bgColor: "bg-[#E3EBE6]",
    textColor: "text-sage-dark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Lotus / Three-leaf organic yoga symbol */}
        <path d="M12 3c-1.5 3-3 6-3 9a3 3 0 006 0c0-3-1.5-6-3-9z" />
        <path d="M12 12c-3-1-6-1-8 1 1 3 3 5 6 4" />
        <path d="M12 12c3-1 6-1 8 1-1 3-3 5-6 4" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-linen">
      {/* Subtle Ambient Spiritual Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Center Sacred Mandala Watermark */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square pointer-events-none select-none opacity-[0.035] text-sage-dark animate-spin-slow -z-0">
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <circle cx="200" cy="200" r="190" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="110" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="70" />
          {[...Array(12)].map((_, i) => (
            <path
              key={`ab-m-${i}`}
              d="M 200 60 C 215 110, 235 150, 200 200 C 165 150, 185 110, 200 60 Z"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT VISUAL COMPOSITION ================= */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] lg:max-w-none">
              
              {/* Offset Decorative Backdrop Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 rounded-[2rem] sm:rounded-[3rem] bg-sage-dark/15 border border-white/40 pointer-events-none -z-0"></div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-sage-light border border-white/60 z-10">
                <img
                  src="/assets/gokul-maithani-yoga-teacher-rishikesh.webp"
                  alt="Gokul Maithani Yoga Master"
                  className="w-full h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[530px] object-cover object-center saturate-[0.9] hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-5 left-2 sm:-bottom-8 sm:-left-8 max-w-[88%] sm:max-w-[340px] bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-sage/15 z-30">
                {/* Quotation Mark & Line */}
                <div className="flex items-start gap-2.5 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-primary font-serif font-bold text-2xl sm:text-4xl leading-none select-none">
                    “
                  </span>
                  <div className="w-6 sm:w-8 h-[2px] bg-primary/40 mt-2 sm:mt-3 rounded-full"></div>
                </div>

                {/* Quote Text */}
                <p className="text-charcoal/80 italic font-display text-[11px] sm:text-sm leading-relaxed pr-4 sm:pr-6">
                  Yoga is not just about the pose, it's about who you become
                  while doing it.
                </p>

                {/* Decorative Lotus watermark in bottom right */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3.5 w-5 h-5 sm:w-6 sm:h-6 text-sage/30 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4c-1.2 2.5-2.5 5-2.5 7.5a2.5 2.5 0 005 0C14.5 9 13.2 6.5 12 4z" />
                  <path d="M12 11.5c-2.5-.8-5-.8-6.5.8.8 2.5 2.5 4.2 5 3.5" />
                  <path d="M12 11.5c2.5-.8 5-.8 6.5.8-.8 2.5-2.5 4.2-5 3.5" />
                </svg>
              </div>

            </div>
          </Reveal>

          {/* ================= RIGHT TEXT & FEATURES ================= */}
          <div className="lg:col-span-7 relative pt-4 sm:pt-6 lg:pt-0">
            
            {/* Top Right Slogan */}
            <div className="hidden md:flex absolute -top-8 right-0 items-start gap-3 pointer-events-none">
              <div className="border-l border-charcoal/20 pl-3 py-0.5 text-[10px] tracking-[0.25em] text-charcoal/45 font-semibold uppercase leading-tight text-left">
                MOVE<br />
                BREATHE<br />
                BE A BETTER<br />
                YOU
              </div>
            </div>

            <Reveal>
              <div className="max-w-2xl">
                {/* Eyebrow with horizontal dash */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">
                    The Journey
                  </span>
                  <div className="w-10 h-[1.5px] bg-primary/40 rounded-full"></div>
                </div>

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 mb-4 sm:mb-6 leading-tight">
                  About <br />
                  <span className="text-sage-dark">Gokul Maithani</span>
                </h2>

                {/* Description Paragraph */}
                <p className="text-charcoal/75 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
                  A certified instructor focusing on physical, mental, and
                  spiritual well-being through personalized guidance and
                  mindfulness. With over a decade of experience, Gokul brings a
                  modern scientific approach to traditional yogic wisdom.
                </p>
              </div>
            </Reveal>

            {/* 3 Pillars / Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
              {FEATURES.map((f) => (
                <Reveal key={f.title} className="h-full">
                  <div className="h-full flex flex-col items-start p-4 sm:p-0 rounded-2xl bg-white/40 sm:bg-transparent border border-sage/10 sm:border-0">
                    {/* Icon Badge */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl ${f.bgColor} ${f.textColor} mb-3 sm:mb-4 shadow-sm`}
                    >
                      {f.icon}
                    </div>

                    {/* Feature Title */}
                    <h3 className="font-display font-semibold text-base sm:text-lg text-sage-dark mb-1.5 sm:mb-2 leading-snug">
                      {f.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="text-xs sm:text-sm text-charcoal/65 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
