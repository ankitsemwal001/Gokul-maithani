import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";

const BENEFITS = [
  {
    title: "Nervous System Regulation",
    desc: "Activate the parasympathetic system to lower stress hormones.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Deep Relaxation",
    desc: "Release physical tension and enter profound stillness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4 0 7 3 7 7 0 4-3 7-7 7s-7-3-7-7c0-4 3-7 7-7z" />
        <circle cx="12" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Mental Clarity",
    desc: "Quiet the mind to sharpen awareness in the present moment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6a4 4 0 008 0V2" />
        <path d="M12 8v14" />
        <path d="M12 10a4 4 0 01-8 0V6" />
      </svg>
    ),
  },
];

const CLASS_DETAILS = [
  {
    label: "Duration",
    value: "45 Minutes of guided practice",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "All Levels — No experience required",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M5.5 20a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    label: "Focus",
    value: "Stillness, Awareness, and Internal Harmony",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const SCHEDULE = [
  {
    day: "Mon",
    time: "05:30",
    title: "Sunrise Awakening",
    desc: "Pranayama Focused",
  },
  {
    day: "Wed",
    time: "05:30",
    title: "Mid-Week Decompression",
    desc: "Meditation Focused",
  },
  {
    day: "Fri",
    time: "05:30",
    title: "Deep Integration",
    desc: "Extended 60m Session",
  },
];

export default function Pranayama() {
  usePageMeta({
    title: "Pranayama & Meditation Classes in Rishikesh | Gokul Maithani",
    description:
      "Practice Pranayama breathing and guided meditation in Rishikesh with certified teacher Gokul Maithani. Calm your nervous system, reduce stress and awaken inner tranquility.",
    path: "/pranayama-meditation-rishikesh",
    ogImage: "/assets/og-image.png",
  });

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden py-16 sm:py-20">
        <img
          src="/assets/pranayama-breathing-yoga-rishikesh.webp"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Meditation Practice"
          width="1024"
          height="1024"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linen/75"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 bg-gradient-to-b from-transparent to-linen"></div>

        <Reveal>
          <div className="relative z-10 px-4 sm:px-6 max-w-3xl">
            <span className="text-sage-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-sage/20 px-3.5 py-1 rounded-full">
              Spiritual Practice
            </span>
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-sage-dark mt-4 mb-4 sm:mb-6 leading-tight">
              Pranayama &amp; Meditation
            </h1>
            <p className="text-charcoal/80 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto">
              Discover the profound power of inner silence through ancient
              breathing techniques.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-sage-dark mb-4 sm:mb-6 leading-tight">
              The Power of Breath &amp; Meditation
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Pranayama is the sacred practice of breath regulation. In
              Sanskrit, <span className="text-primary font-semibold">prana</span>{" "}
              means life energy and{" "}
              <span className="text-primary font-semibold">ayama</span> means
              control or extension.
            </p>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
              By consciously guiding our breath, we influence the flow of energy
              throughout the body, clearing energetic blockages and preparing
              the mind for deep, focused meditation.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative flex justify-center">
            <div className="bg-sage-light/60 rounded-2xl shadow-card p-3 sm:p-4 max-w-md w-full">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/assets/pranayama-breathing-yoga-rishikesh.webp"
                  alt="Breathing Illustration"
                  width="1024"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-72 sm:max-h-80 object-contain saturate-[0.85]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage-light/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark mb-10 sm:mb-16">
              Holistic Benefits
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {BENEFITS.map((b) => (
              <Reveal key={b.title} className="h-full">
                <div className="card p-6 sm:p-10 h-full text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/15 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h4 className="font-display font-semibold text-base sm:text-lg text-sage-dark mb-2 sm:mb-3">
                    {b.title}
                  </h4>
                  <p className="text-charcoal/65 text-xs sm:text-sm">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-sage-dark text-white rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 shadow-card">
          <div className="flex-1 w-full">
            <h3 className="font-display text-2xl sm:text-3xl mb-6 sm:mb-10 text-left">Class Details</h3>
            <ul className="space-y-6 sm:space-y-8 text-sm">
              {CLASS_DETAILS.map((item) => (
                <li key={item.label} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
                      {item.label}
                    </p>
                    <p className="font-semibold text-white text-xs sm:text-sm">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center py-6">
            <div className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full border border-white/15 animate-pulse-slow"></div>
            <div className="absolute w-52 sm:w-72 h-52 sm:h-72 rounded-full border border-white/10"></div>
            <div className="w-44 sm:w-60 h-44 sm:h-60 rounded-full bg-white/5 flex flex-col items-center justify-center text-center px-6 sm:px-10 relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-2 sm:mb-4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed italic">
                "Silence is not an absence of sound,
                <br />
                but a presence of self."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <Reveal>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark mb-3 sm:mb-4">
            Weekly Schedule
          </h3>
          <p className="text-charcoal/65 text-sm sm:text-base mb-10 sm:mb-14">
            Join our upcoming collective meditation sessions.
          </p>
        </Reveal>

        <div className="space-y-4 sm:space-y-6">
          {SCHEDULE.map((s) => (
            <Reveal key={s.day}>
              <div className="card p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:shadow-card transition">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="bg-sage/15 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-center shrink-0">
                    <p className="text-[10px] sm:text-xs uppercase text-sage-dark font-bold">
                      {s.day}
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-charcoal">{s.time}</p>
                  </div>
                  <div className="text-left">
                    <p className="font-display font-semibold text-base sm:text-lg text-sage-dark">
                      {s.title}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal/60">{s.desc}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center inline-block bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-dark transition shadow-soft"
                >
                  Book Spot
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="bg-sage-light/60 rounded-3xl text-center p-8 sm:p-12 md:p-16">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl text-sage-dark mb-4 sm:mb-6">
              Find Your Inner Peace
            </h3>
            <p className="text-charcoal/70 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
              Take the first step toward a calmer mind and more energized life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                Begin Your Journey
              </Link>
              <Link to="/contact" className="btn-outline text-sm sm:text-base">
                Inquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}