import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import FeedbackButton from "../components/FeedbackButton";
import Testimonials from "../components/Testimonials";
import StatsCounter from "../components/StatsCounter";
import ClassFinder from "../components/ClassFinder";
import PricingSection from "../components/PricingSection";
import GallerySection from "../components/GallerySection";
import FaqSection from "../components/FaqSection";
import TransformativeClasses from "../components/TransformativeClasses";
import AboutSection from "../components/AboutSection";

const WHY_ITEMS = [
  {
    title: "Small Batch Sizes",
    desc: "We limit our groups to ensure quality supervision for everyone.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0113 0" />
        <path d="M15.5 6.5a3.5 3.5 0 010 6" />
        <path d="M17.5 20a6.5 6.5 0 00-3.5-5.7" />
      </svg>
    ),
  },
  {
    title: "Personal Attention",
    desc: "Individual corrections and modifications based on your progress.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
      </svg>
    ),
  },
  {
    title: "Peaceful Environment",
    desc: "A serene studio space designed to calm your senses instantly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 10a8 8 0 01-16 0V4l8-2 8 2v6z" />
        <path d="M4 21h16" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Long-term Health",
    desc: "Sustainable practices focused on lifelong vitality and mobility.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s-7-4.35-9.3-8.5C1 8.5 3.5 5.5 6.8 5.5c2.2 0 3.9 1.3 5.2 3.2 1.3-1.9 3-3.2 5.2-3.2 3.3 0 5.8 3 4.1 7C19 16.65 12 21 12 21z" />
      </svg>
    ),
  },
];

const SCHEDULE_GROUPS = [
  {
    title: "Morning Batches",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
    batches: [
      { tag: "Batch 01", name: "Dawn Flow", time: "6:00 – 7:00 AM", days: "Mon – Sat" },
      { tag: "Batch 02", name: "Gentle Start", time: "7:30 – 8:30 AM", days: "Mon – Sat" },
    ],
  },
  {
    title: "Evening Batches",
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
        <path d="M20 13.5A8 8 0 1110.5 4a7 7 0 009.5 9.5z" />
      </svg>
    ),
    batches: [
      { tag: "Batch 03", name: "Sunset Release", time: "5:30 – 6:30 PM", days: "Mon – Fri" },
      { tag: "Batch 04", name: "Night Restorative", time: "7:00 – 8:00 PM", days: "Mon – Fri" },
    ],
  },
];

function ContactDetail({ icon, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-white/70 text-primary">
        {icon}
      </div>
      <span className="font-semibold text-white">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="/assets/goku.png"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
          loading="eager"
          decoding="async"
          alt="Gokul Maithani Yoga Session"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-linen via-linen/85 to-linen/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl py-24">
            <Reveal>
              <span className="inline-block mb-6 px-4 py-1.5 text-xs font-bold rounded-full bg-sage/20 text-sage-dark uppercase tracking-[0.2em]">
                Certified Yoga Excellence
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-sage-dark leading-[1.08] mb-6">
                Transform Your Body,
                <br />
                <em className="text-primary-dark">Calm Your Mind.</em>
              </h1>

              <p className="text-charcoal/80 text-lg leading-relaxed mb-10 max-w-lg">
                Experience specialized yoga classes by Gokul Maithani designed
                for strength, flexibility and profound inner balance.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Book a Trial Class
                </a>
                <a
                  href="#classes"
                  className="text-sage-dark font-semibold underline underline-offset-8 decoration-primary decoration-2 hover:text-primary-dark transition"
                >
                  Explore our classes
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsCounter />
      <AboutSection />
      <TransformativeClasses />


      <ClassFinder />

      <section id="schedule" className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-20">
            <span className="eyebrow">Timings</span>
            <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
              Class Schedule
            </h2>
            <p className="text-charcoal/70 mt-6 leading-relaxed">
              Consistent weekly batches so your practice becomes a habit, not
              an effort.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {SCHEDULE_GROUPS.map((group) => (
            <Reveal key={group.title} className="h-full">
              <div className="card p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                    {group.icon}
                  </div>
                  <h4 className="font-display font-semibold text-2xl text-sage-dark">
                    {group.title}
                  </h4>
                </div>

                <div className="space-y-5">
                  {group.batches.map((b) => (
                    <div
                      key={b.tag}
                      className="border border-sage/20 rounded-2xl p-6 flex items-center justify-between hover:border-primary/40 hover:shadow-soft transition"
                    >
                      <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">
                          {b.tag}
                        </span>
                        <h5 className="font-display font-semibold text-xl text-sage-dark mt-1">
                          {b.name}
                        </h5>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-charcoal text-lg">
                          {b.time}
                        </p>
                        <span className="text-sm text-charcoal/55">{b.days}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PricingSection />

      <section className="py-28 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-7xl mx-auto mb-20">
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
                Why Practice With Us?
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 max-w-4xl mx-auto">
            {WHY_ITEMS.map((item) => (
              <Reveal key={item.title}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-sage/15 text-sage-dark">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xl mb-2 text-sage-dark">
                      {item.title}
                    </h4>
                    <p className="text-charcoal/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <GallerySection />

      <FaqSection />

      <FeedbackButton />

      <section id="contact" className="py-28 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card overflow-hidden grid lg:grid-cols-2 shadow-card">
            <div className="bg-sage-dark text-white p-10 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                  Get in Touch
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6">
                  Start your yoga journey today
                </h2>
                <p className="text-white/70 leading-relaxed mb-10">
                  Send us a message and we'll help you find the perfect batch
                  for your fitness goals and schedule.
                </p>

                <div className="space-y-6">
                  <ContactDetail
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92V21a1 1 0 01-1.09 1A19.72 19.72 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75l.7 3.11a1 1 0 01-.27.95L8.91 10.09a16 16 0 006 6l1.28-1.61a1 1 0 01.95-.27l3.11.7a1 1 0 01.75 1z" />
                      </svg>
                    }
                  >
                    +91 89794 00645
                  </ContactDetail>

                  <ContactDetail
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v16H4z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    }
                  >
                    <>
                      <a
                        href="mailto:maithanigoku@gmail.com"
                        className="hover:text-primary transition"
                      >
                        maithanigoku@gmail.com
                      </a>
                    </>
                  </ContactDetail>

                  <ContactDetail
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" />
                        <circle cx="12" cy="11" r="2" />
                      </svg>
                    }
                  >
                    Uttarakhand, Rishikesh
                  </ContactDetail>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/15 h-56">
                <iframe
                  title="Rishikesh, Uttarakhand"
                  src="https://maps.google.com/maps?q=Rishikesh%2C%20Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale-[0.6] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-linen-light p-10 md:p-14">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}