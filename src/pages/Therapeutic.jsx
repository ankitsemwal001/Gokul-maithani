import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const BENEFITS = [
  {
    title: "Pain Relief",
    desc: "Helps reduce chronic pain and physical tension.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" />
      </svg>
    ),
  },
  {
    title: "Improved Mobility",
    desc: "Gentle movement increases flexibility and joint health.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Stress Reduction",
    desc: "Calms the nervous system and promotes relaxation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
];

const CLASS_INFO = [
  { title: "Duration", value: "60 Minutes" },
  { title: "Level", value: "Beginner Friendly" },
  { title: "Focus", value: "Healing & Recovery" },
];

const SCHEDULE = [
  { day: "Tuesday", time: "09:00 AM" },
  { day: "Thursday", time: "09:00 AM" },
  { day: "Saturday", time: "10:00 AM" },
];

export default function Therapeutic() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="/assets/side plank.jpeg"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Therapeutic Yoga Practice"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/30"></div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-6 px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Healing Practice
              </span>
              <h1 className="text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-6">
                Therapeutic <em className="text-primary-dark">Yoga</em>
              </h1>
              <p className="text-charcoal/80 max-w-xl mb-10 leading-relaxed">
                A gentle and supportive yoga practice designed to relieve pain,
                restore mobility, and promote natural healing through mindful
                movement and breath.
              </p>
              <Link to="/#contact" className="btn-primary">
                Join Therapeutic Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-sage-dark mb-6">
              What is Therapeutic Yoga?
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-6">
              Therapeutic Yoga focuses on using yoga as a healing tool. It
              combines gentle movements, breath awareness and supported
              postures to help relieve pain and restore balance in the body.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              This practice is slow and mindful, making it ideal for people
              recovering from injuries, managing chronic pain, or seeking a
              softer and more restorative yoga experience.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-10 h-fit sticky top-32 shadow-card">
            <h3 className="font-display font-semibold text-xl text-sage-dark mb-8">
              Therapeutic Class Schedule
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
              Book Therapeutic Class
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
              Start Your Healing Journey
            </h3>
            <p className="text-white/70 mb-10 leading-relaxed">
              Experience the restorative power of therapeutic yoga.
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