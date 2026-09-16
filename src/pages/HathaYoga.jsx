import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const BENEFITS = [
  {
    title: "Improves Flexibility",
    desc: "Gentle stretching helps lengthen muscles and increase joint mobility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4 4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Better Posture",
    desc: "Strengthens core muscles and supports proper spinal alignment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Stress Relief",
    desc: "Deep breathing techniques calm the nervous system and reduce stress.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
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
        <path d="M12 7v5l3 3" />
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
    value: "Posture & Breath Awareness",
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

export default function HathaYoga() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="/assets/a.jpeg"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Hatha Yoga Practice"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/30"></div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-6 px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Foundation Practice
              </span>
              <h1 className="text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-6">
                Hatha <em className="text-primary-dark">Yoga</em>
              </h1>
              <p className="text-charcoal/80 max-w-xl mb-10 leading-relaxed">
                A traditional and mindful yoga practice focused on posture,
                breath awareness, and balance between body and mind.
              </p>
              <Link to="/#contact" className="btn-primary">
                Join Hatha Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-sage-dark mb-6">
              What is Hatha Yoga?
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-6">
              Hatha yoga is one of the most traditional forms of yoga that
              focuses on physical postures (asanas) and controlled breathing
              (pranayama). It helps bring balance between strength and
              relaxation.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              The practice moves at a slower and mindful pace, allowing
              practitioners to develop flexibility, body awareness, and inner
              calm.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-10 h-fit sticky top-32 shadow-card">
            <h3 className="font-display font-semibold text-xl text-sage-dark mb-8">
              Hatha Class Schedule
            </h3>
            <ul className="space-y-6 text-sm">
              {SCHEDULE.map((s) => (
                <li key={s.day} className="flex justify-between">
                  <span>{s.day}</span>
                  <span className="text-primary font-semibold">{s.time}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/#contact"
              className="block text-center bg-primary text-white font-bold py-4 rounded-full mt-10 hover:bg-primary-dark transition"
            >
              Book Hatha Class
            </Link>
            <div className="flex items-center gap-4 mt-8">
              <img src="/assets/goku.png" className="w-12 h-12 rounded-full object-cover saturate-[0.85]" alt="Gokul Maithani" />
              <div>
                <p className="text-xs text-charcoal/50">LEAD INSTRUCTOR</p>
                <p className="font-semibold text-sm">Gokul Maithani</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-display text-sage-dark mb-16">
              Key Benefits
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((b) => (
              <Reveal key={b.title} className="h-full">
                <div className="card p-10 h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/15 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-3 text-sage-dark">
                    {b.title}
                  </h4>
                  <p className="text-charcoal/65">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-display text-sage-dark mb-16">
              Class Information
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {CLASS_INFO.map((c) => (
              <Reveal key={c.title} className="h-full">
                <div className="card p-10 h-full">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/15 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2 text-sage-dark">
                    {c.title}
                  </h4>
                  <p className="text-charcoal/65">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sage-dark text-white text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-display text-4xl mb-6">
              Begin Your Yoga Journey
            </h3>
            <p className="text-white/70 mb-10 leading-relaxed">
              Build a strong foundation for flexibility, strength and
              mindfulness through Hatha yoga.
            </p>
            <Link to="/#contact" className="btn-primary">
              Reserve Your Spot
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}