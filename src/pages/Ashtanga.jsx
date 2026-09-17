import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";

const BENEFITS = [
  {
    title: "Builds Strength",
    desc: "Develop full-body muscle tone and core stability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15V9m12 6V9M4 9h16M4 15h16" />
      </svg>
    ),
  },
  {
    title: "Improves Stamina",
    desc: "Continuous flow enhances endurance and breath control.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mental Discipline",
    desc: "Encourages focus, resilience, and inner awareness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4 0 7 3 7 7 0 4-3 7-7 7s-7-3-7-7c0-4 3-7 7-7z" />
      </svg>
    ),
  },
];

const CLASS_INFO = [
  {
    title: "Duration",
    value: "75 Minutes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Level",
    value: "Intermediate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4 4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Focus",
    value: "Strength & Breath Synchronization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const SCHEDULE = [
  { day: "Monday", time: "06:30 AM" },
  { day: "Wednesday", time: "07:30 AM" },
  { day: "Friday", time: "07:00 AM" },
  { day: "Saturday", time: "08:00 AM" },
];

export default function Ashtanga() {
  usePageMeta({
    title: "Ashtanga Yoga Classes in Rishikesh | Gokul Maithani",
    description:
      "Join dynamic Ashtanga Yoga classes in Rishikesh with certified teacher Gokul Maithani. Build strength, stamina and mental discipline through breath-synchronized sequences in Tapovan.",
    path: "/ashtanga-yoga-rishikesh",
    ogImage: "/assets/gokul-maithani-yoga-og-image-rishikesh.webp",
  });

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden py-16 sm:py-20 md:py-0">
        <img
          src="/assets/ek-pada-vakasana-arm-balance-yoga-rishikesh.webp"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Ashtanga Yoga Practice in Rishikesh"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/90 to-linen/40"></div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Dynamic Practice
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-4 sm:mb-6">
                Ashtanga <em className="text-primary-dark">Yoga</em>
              </h1>
              <p className="text-charcoal/80 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
                A powerful and disciplined sequence-based practice designed to
                build strength, endurance, and deep mental clarity.
              </p>
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                Join Ashtanga Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-sage-dark mb-4 sm:mb-6 leading-tight">
              What is Ashtanga Yoga?
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Ashtanga Yoga is a structured and traditional system that
              follows a fixed sequence of postures synchronized with breath.
              It builds internal heat, increases stamina, and sharpens focus.
            </p>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              The practice encourages discipline, consistency, and mental
              resilience while strengthening the entire body.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-6 sm:p-10 h-fit static md:sticky md:top-32 shadow-card">
            <h3 className="font-display font-semibold text-lg sm:text-xl text-sage-dark mb-6 sm:mb-8">
              Ashtanga Class Schedule
            </h3>
            <ul className="space-y-4 sm:space-y-6 text-sm">
              {SCHEDULE.map((s) => (
                <li key={s.day} className="flex justify-between items-center py-1 border-b border-sage/10 last:border-0">
                  <span className="font-medium text-charcoal">{s.day}</span>
                  <span className="text-primary font-semibold">{s.time}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block text-center bg-primary text-white font-bold py-3.5 sm:py-4 rounded-full mt-8 sm:mt-10 hover:bg-primary-dark transition text-sm sm:text-base shadow-soft"
            >
              Book Ashtanga Class
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-sage/15">
              <img src="/assets/gokul-maithani-yoga-teacher-portrait-rishikesh.webp" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover saturate-[0.85]" alt="Gokul Maithani" />
              <div>
                <p className="text-[10px] sm:text-xs text-charcoal/50 font-bold uppercase tracking-wider">LEAD INSTRUCTOR</p>
                <p className="font-semibold text-sm sm:text-base text-sage-dark">Gokul Maithani</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-sage-dark mb-10 sm:mb-16">
              Key Benefits
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {BENEFITS.map((b) => (
              <Reveal key={b.title} className="h-full">
                <div className="card p-6 sm:p-10 h-full text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-2xl bg-primary/15 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h4 className="font-display font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-sage-dark">
                    {b.title}
                  </h4>
                  <p className="text-charcoal/65 text-xs sm:text-sm">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-sage-dark mb-10 sm:mb-16">
              Class Information
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {CLASS_INFO.map((c) => (
              <Reveal key={c.title} className="h-full">
                <div className="card p-6 sm:p-10 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-2xl bg-primary/15 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h4 className="font-display font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-sage-dark">
                    {c.title}
                  </h4>
                  <p className="text-charcoal/65 text-xs sm:text-sm">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-sage-dark text-white text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="font-display text-2xl sm:text-4xl mb-4 sm:mb-6 leading-tight">
              Ready for a Stronger Practice?
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              Take your yoga journey to the next level with structured
              discipline.
            </p>
            <Link to="/contact" className="btn-primary text-sm sm:text-base">
              Reserve Your Spot
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}