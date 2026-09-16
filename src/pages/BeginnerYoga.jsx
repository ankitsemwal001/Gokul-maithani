import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const CORE_BENEFITS = [
  { title: "Improved Flexibility", desc: "Gentle stretching helps increase mobility." },
  { title: "Body Awareness", desc: "Learn how to move safely and mindfully." },
  { title: "Stress Relief", desc: "Breathing techniques calm the mind." },
  { title: "Confidence", desc: "Build comfort with yoga fundamentals." },
];

const CLASS_INFO = [
  { title: "Duration", value: "60 Minutes" },
  { title: "Level", value: "Absolute Beginner" },
  { title: "Focus", value: "Foundations & Safety" },
];

const SCHEDULE = [
  { label: "Morning Batch", time: "07:00 – 08:00 AM" },
  { label: "Evening Batch", time: "06:30 – 07:30 PM" },
];

export default function BeginnerYoga() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="/assets/ustrasana.jpeg"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Beginner Yoga Practice"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/30"></div>

        <Reveal>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-6 px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Beginner Friendly
              </span>
              <h1 className="text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-6">
                Beginner <em className="text-primary-dark">Yoga</em>
              </h1>
              <p className="text-charcoal/80 max-w-xl mb-10 leading-relaxed">
                Start your yoga journey with simple, guided practices designed
                for complete beginners. Build confidence, strength and
                flexibility step by step.
              </p>
              <Link to="/#contact" className="btn-primary">
                Start Your First Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-sage-dark mb-6">
              What is Beginner Yoga?
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-6">
              Beginner yoga classes introduce the essential foundations of
              yoga practice in a slow and supportive environment. You will
              learn simple postures, breathing awareness, and basic alignment
              techniques.
            </p>
            <p className="text-charcoal/75 leading-relaxed mb-10">
              The goal is to build confidence and comfort in your body while
              improving flexibility, strength, and relaxation. No prior yoga
              experience is required.
            </p>

            <div className="bg-sage-light/60 rounded-2xl p-10">
              <h3 className="font-display font-semibold text-lg text-sage-dark mb-8">
                Core Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 text-sm">
                {CORE_BENEFITS.map((b) => (
                  <div key={b.title}>
                    <p className="font-semibold mb-1">{b.title}</p>
                    <p className="text-charcoal/60">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-10 h-fit sticky top-32 shadow-card">
            <h3 className="font-display font-semibold text-xl text-sage-dark mb-8">
              Class Schedule
            </h3>
            <ul className="space-y-6 text-sm">
              {SCHEDULE.map((s) => (
                <li key={s.label} className="flex justify-between">
                  <span>{s.label}</span>
                  <span className="text-primary font-semibold">{s.time}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/#contact"
              className="block text-center bg-primary text-white font-bold py-4 rounded-full mt-10 hover:bg-primary-dark transition"
            >
              Book Beginner Class
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
        <div className="max-w-6xl mx-auto px-6 text-center">
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
              Start Your Yoga Journey Today
            </h3>
            <p className="text-white/70 mb-10 leading-relaxed">
              Perfect for first-time practitioners. Join a supportive and
              beginner-friendly environment.
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