import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";

const BENEFITS = [
  {
    title: "Posture Precision",
    desc: "Biomechanical cueing corrects alignment and releases chronic tension.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Joint Mobility",
    desc: "Targeted stretching unlocks rigid hips, shoulders, and spine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Core Stability",
    desc: "Deep stabilizer work protects the spine during daily life and sport.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const CLASS_INFO = [
  {
    title: "Duration",
    value: "60 Minutes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Level",
    value: "All Levels",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4 4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Focus",
    value: "Biomechanics & Structural Balance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const SCHEDULE = [
  { day: "Wednesday", time: "09:00 AM" },
  { day: "Saturday", time: "11:00 AM" },
];

export default function AlignmentMobility() {
  usePageMeta({
    title: "Alignment & Mobility Yoga in Rishikesh | Gokul Maithani",
    description:
      "Correct your posture and unlock joint mobility with Alignment & Mobility yoga in Rishikesh. Biomechanics-focused sessions with Gokul Maithani for core stability and pain-free movement.",
    path: "/alignment-mobility-yoga-rishikesh",
    ogImage: "/assets/gokul-maithani-yoga-og-image-rishikesh.webp",
  });

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden py-16 sm:py-20 md:py-0">
        <img
          src="/assets/parivrtta-trikonasana-pose-yoga-rishikesh.webp"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Alignment and Mobility Yoga Practice in Rishikesh"
          width="1440"
          height="1440"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/90 to-linen/40"></div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Precision Practice
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-4 sm:mb-6">
                Alignment &amp; <em className="text-primary-dark">Mobility</em>
              </h1>
              <p className="text-charcoal/80 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
                A biomechanics-focused practice for posture precision, core
                stability, and unlocking rigid joints for pain-free movement.
              </p>
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                Join Alignment Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-sage-dark mb-4 sm:mb-6 leading-tight">
              What is Alignment &amp; Mobility Yoga?
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Alignment and mobility yoga applies modern movement science to
              traditional postures. Instead of forcing deep shapes, it teaches
              you to organize the pelvis, spine, and shoulders for structural
              balance and injury prevention.
            </p>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              The practice combines precision cueing, core engagement, and
              targeted stretching—ideal for desk workers, athletes, and anyone
              seeking smoother, more resilient movement.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-6 sm:p-10 h-fit static md:sticky md:top-32 shadow-card">
            <h3 className="font-display font-semibold text-lg sm:text-xl text-sage-dark mb-6 sm:mb-8">
              Alignment Class Schedule
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
              Book Alignment Class
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-sage/15">
              <img src="/assets/gokul-maithani-yoga-teacher-portrait-rishikesh.webp" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover saturate-[0.85]" alt="Gokul Maithani Alignment and Mobility Yoga Teacher in Rishikesh" width="861" height="834" loading="lazy" decoding="async" />
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
              Move Better, For Longer
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              Build a body that moves with freedom, precision, and sustainable
              longevity.
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