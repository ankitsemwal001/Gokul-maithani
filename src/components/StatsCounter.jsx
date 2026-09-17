import React from "react";
import Reveal from "./Reveal";

const STATS = [
  {
    number: "5+",
    label: "Years of Experience",
    subtext: "Traditional & Modern Practice",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "500+",
    label: "Students Guided",
    subtext: "Beginners to Advanced",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "200+",
    label: "Hours Certified",
    subtext: "Yoga Alliance Standard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: "100%",
    label: "Personal Attention",
    subtext: "Small Focused Batches",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function StatsCounter() {
  return (
    <section className="relative -mt-6 sm:-mt-10 md:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal>
        <div className="bg-linen-light/95 backdrop-blur-md rounded-3xl border border-sage/20 shadow-card p-5 sm:p-7 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-2 sm:p-0 rounded-2xl bg-white/40 sm:bg-transparent border border-sage/10 sm:border-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl sm:rounded-2xl bg-sage/15 text-sage-dark flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-sage-dark tracking-tight">
                    {s.number}
                  </div>
                  <div className="font-semibold text-charcoal text-xs sm:text-sm">
                    {s.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-charcoal/60 mt-0.5 leading-tight">
                    {s.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}