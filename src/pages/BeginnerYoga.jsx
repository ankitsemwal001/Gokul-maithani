import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";

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
  usePageMeta({
    title: "Beginner Yoga Classes in Rishikesh | Gokul Maithani",
    description:
      "Start yoga as a beginner in Rishikesh with certified teacher Gokul Maithani. Gentle step-by-step classes to build flexibility, confidence and foundational movement habits.",
    path: "/beginner-yoga-rishikesh",
    ogImage: "/assets/og-image.png",
  });

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden py-16 sm:py-20 md:py-0">
        <img
          src="/assets/ustrasana-camel-pose-yoga-rishikesh.webp"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          alt="Beginner Yoga Practice"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/90 to-linen/40"></div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="inline-block mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Beginner Friendly
              </span>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display text-sage-dark leading-tight mb-4 sm:mb-6">
                Beginner <em className="text-primary-dark">Yoga</em>
              </h1>
              <p className="text-charcoal/80 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
                Start your yoga journey with simple, guided practices designed
                for complete beginners. Build confidence, strength and
                flexibility step by step.
              </p>
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                Start Your First Class
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal>
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display text-sage-dark mb-4 sm:mb-6 leading-tight">
              What is Beginner Yoga?
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Beginner yoga classes introduce the essential foundations of
              yoga practice in a slow and supportive environment. You will
              learn simple postures, breathing awareness, and basic alignment
              techniques.
            </p>
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              The goal is to build confidence and comfort in your body while
              improving flexibility, strength, and relaxation. No prior yoga
              experience is required.
            </p>

            <div className="bg-sage-light/60 rounded-2xl p-6 sm:p-10">
              <h3 className="font-display font-semibold text-base sm:text-lg text-sage-dark mb-6 sm:mb-8">
                Core Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 text-sm">
                {CORE_BENEFITS.map((b) => (
                  <div key={b.title}>
                    <p className="font-semibold mb-1 text-sage-dark text-sm sm:text-base">{b.title}</p>
                    <p className="text-charcoal/60 text-xs sm:text-sm">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-6 sm:p-10 h-fit static md:sticky md:top-32 shadow-card">
            <h3 className="font-display font-semibold text-lg sm:text-xl text-sage-dark mb-6 sm:mb-8">
              Class Schedule
            </h3>
            <ul className="space-y-4 sm:space-y-6 text-sm">
              {SCHEDULE.map((s) => (
                <li key={s.label} className="flex justify-between items-center py-1 border-b border-sage/10 last:border-0">
                  <span className="font-medium text-charcoal">{s.label}</span>
                  <span className="text-primary font-semibold">{s.time}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block text-center bg-primary text-white font-bold py-3.5 sm:py-4 rounded-full mt-8 sm:mt-10 hover:bg-primary-dark transition text-sm sm:text-base shadow-soft"
            >
              Book Beginner Class
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
              Class Information
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {CLASS_INFO.map((c) => (
              <Reveal key={c.title} className="h-full">
                <div className="card p-6 sm:p-10 h-full">
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
              Start Your Yoga Journey Today
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              Perfect for first-time practitioners. Join a supportive and
              beginner-friendly environment.
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