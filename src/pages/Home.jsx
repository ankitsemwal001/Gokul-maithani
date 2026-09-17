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
import usePageMeta from "../hooks/usePageMeta";

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
  usePageMeta({
    title: "Yoga Classes in Rishikesh | Certified Yoga Teacher | Gokul Maithani",
    description:
      "Join certified yoga teacher Gokul Maithani in Rishikesh for Hatha, Ashtanga, Vinyasa, Therapeutic and Beginner Yoga, plus Pranayama, Meditation and Wellness Retreats. Private and group classes for all levels at Tapovan studio.",
    path: "/",
    ogImage: "/assets/gokul-maithani-yoga-og-image-rishikesh.webp",
  });

  return (
    <>
      {/* ================= HERO SECTION WITH RICH SPIRITUAL BACKGROUND & ELEMENTS ================= */}
      <section id="hero" className="relative flex items-center overflow-hidden bg-linen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-14 lg:pb-16">
        {/* Sacred Geometry Mandala Background Watermark (Right/Center) */}
        <div className="absolute top-1/2 right-0 lg:right-12 -translate-y-1/2 w-[380px] xs:w-[500px] sm:w-[700px] lg:w-[850px] aspect-square pointer-events-none select-none opacity-[0.07] text-sage-dark animate-spin-slow -z-0">
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            <circle cx="200" cy="200" r="190" strokeDasharray="3 3" />
            <circle cx="200" cy="200" r="160" />
            <circle cx="200" cy="200" r="130" strokeDasharray="6 4" />
            <circle cx="200" cy="200" r="100" />
            <circle cx="200" cy="200" r="70" strokeDasharray="4 2" />
            <circle cx="200" cy="200" r="40" />
            <circle cx="200" cy="200" r="15" fill="currentColor" fillOpacity="0.1" />
            {/* 12 Outer Petals */}
            {[...Array(12)].map((_, i) => (
              <path
                key={`p1-${i}`}
                d="M 200 40 C 215 100, 235 150, 200 200 C 165 150, 185 100, 200 40 Z"
                transform={`rotate(${i * 30} 200 200)`}
              />
            ))}
            {/* 8 Inner Petals */}
            {[...Array(8)].map((_, i) => (
              <path
                key={`p2-${i}`}
                d="M 200 100 C 210 140, 220 170, 200 200 C 180 170, 190 140, 200 100 Z"
                transform={`rotate(${i * 45 + 22.5} 200 200)`}
              />
            ))}
            {/* Cross Lines & Star Grid */}
            <path d="M 10 200 L 390 200 M 200 10 L 200 390" strokeDasharray="2 4" />
            <path d="M 65 65 L 335 335 M 65 335 L 335 65" strokeDasharray="2 4" />
          </svg>
        </div>

        {/* Top-Left Secondary Mandala Accent */}
        <div className="absolute -top-24 -left-24 w-[280px] sm:w-[380px] aspect-square pointer-events-none select-none opacity-[0.05] text-primary -z-0 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "120s" }}>
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="50" />
            {[...Array(8)].map((_, i) => (
              <path key={`sm-${i}`} d="M 100 10 Q 115 55 100 100 Q 85 55 100 10 Z" transform={`rotate(${i * 45} 100 100)`} />
            ))}
          </svg>
        </div>

        {/* Subtle Ambient Spiritual Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sage/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 pt-0 text-left">
              <Reveal>
                <div>

                  {/* Main Display Headline */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display text-sage-dark leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6">
                    Transform Your Body,
                    <br />
                    <em className="text-primary-dark font-normal">Calm Your Mind.</em>
                  </h1>

                  {/* Subtitle Paragraph */}
                  <p className="text-charcoal/80 text-sm sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
                    Experience specialized authentic Himalayan yoga classes by <span className="font-semibold text-sage-dark">Gokul Maithani</span>, designed for functional strength, mindful alignment, and lifelong inner vitality.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 mb-8 sm:mb-10">
                    <Link
                      to="/contact"
                      className="btn-primary text-center text-sm md:text-base px-7 py-3.5 sm:px-8 sm:py-4 shadow-card hover:shadow-lg"
                    >
                      Book a Trial Class
                    </Link>
                    <Link
                      to="/classes"
                      className="inline-flex items-center justify-center gap-2 text-sage-dark font-semibold text-sm md:text-base py-2 underline underline-offset-8 decoration-primary decoration-2 hover:text-primary-dark transition"
                    >
                      <span>Explore Our Classes</span>
                      <span>→</span>
                    </Link>
                  </div>

                  {/* Trust Indicators / Quick Stats */}
                  <div className="pt-5 sm:pt-6 border-t border-sage/20 flex flex-wrap items-center gap-4 sm:gap-10 text-xs sm:text-sm text-charcoal/70">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-500 text-xs sm:text-sm">
                        {"★".repeat(5)}
                      </div>
                      <span className="font-bold text-sage-dark">4.9 / 5.0</span>
                      <span>(120+ Reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>Small Batches (Max 10)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>In-Studio &amp; Online</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Yogi Composition Column (5 cols) */}
            <div className="lg:col-span-5 relative mt-4 sm:mt-8 lg:mt-0 flex justify-center">
              <Reveal>
                <div className="relative w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] flex items-center justify-center">
                  
                  {/* Glowing Active Meditative Energy Aura (behind head) */}
                  <div className="absolute top-2 sm:top-4 md:top-6 left-[3%] -translate-x-1/2 w-[200px] xs:w-[240px] sm:w-[290px] aspect-square rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/30 to-amber-500/20 blur-2xl pointer-events-none -z-10 animate-breathe" />

                  {/* Active Manipur Chakra (Centered directly behind Head) */}
                  <img
                    src="/assets/manipura-chakra-yoga-energy-rishikesh.webp"
                    alt="Active Manipur Chakra"
                    className="absolute -top-3 sm:-top-2 md:top-0 left-[2.5%] -translate-x-1/2 w-[230px] xs:w-[280px] sm:w-[340px] md:w-[380px] aspect-square object-contain pointer-events-none select-none z-0 opacity-95 animate-spin-slow filter drop-shadow-[0_0_25px_rgba(234,179,8,0.45)]"
                  />

                  {/* Yogi Gokul in Meditation (Foreground) */}
                  <div className="relative z-10 w-full flex justify-center pt-6 sm:pt-10">
                    <img
                      src="/assets/gokul-maithani-meditation-pose-rishikesh.webp"
                      alt="Yogi Gokul Maithani in Meditation"
                      className="w-full h-auto max-h-[380px] xs:max-h-[440px] sm:max-h-[540px] object-contain object-bottom saturate-[0.98] transition duration-700 hover:scale-[1.02] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <StatsCounter />
      <AboutSection />
      <TransformativeClasses />


      <ClassFinder />

      <section id="schedule" className="py-16 sm:py-24 md:py-28 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <span className="eyebrow">Timings</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
                Class Schedule
              </h2>
              <p className="text-charcoal/75 text-sm sm:text-lg mt-3 leading-relaxed">
                Consistent weekly batches so your practice becomes a habit, not
                an effort.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {SCHEDULE_GROUPS.map((group) => (
              <Reveal key={group.title} className="h-full">
                <div className="card p-6 sm:p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                      {group.icon}
                    </div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-sage-dark">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    {group.batches.map((b) => (
                      <div
                        key={b.tag}
                        className="border border-sage/20 rounded-2xl p-4 sm:p-6 flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-0 hover:border-primary/40 hover:shadow-soft transition"
                      >
                        <div>
                          <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                            {b.tag}
                          </span>
                          <h4 className="font-display font-semibold text-lg sm:text-xl text-sage-dark mt-0.5 sm:mt-1">
                            {b.name}
                          </h4>
                        </div>
                        <div className="text-left xs:text-right">
                          <p className="font-semibold text-charcoal text-base sm:text-lg">
                            {b.time}
                          </p>
                          <span className="text-xs sm:text-sm text-charcoal/55">{b.days}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="py-16 sm:py-24 md:py-28 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
                Why Practice With Us?
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-14 max-w-4xl mx-auto">
            {WHY_ITEMS.map((item) => (
              <Reveal key={item.title}>
                <div className="flex gap-4 sm:gap-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-2xl bg-sage/15 text-sage-dark">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl mb-1.5 sm:mb-2 text-sage-dark">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
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

      <section id="contact" className="py-16 sm:py-24 md:py-28 bg-sage-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="card overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-card">
            <div className="bg-sage-dark text-white p-6 sm:p-10 md:p-14 flex flex-col justify-between gap-8 sm:gap-10">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                  Get in Touch
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display text-white mt-3 mb-4 sm:mb-6 leading-tight">
                  Start your yoga journey today
                </h2>
                <p className="text-white/80 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10">
                  Send us a message and we'll help you find the perfect batch
                  for your fitness goals and schedule.
                </p>

                <div className="space-y-4 sm:space-y-6">
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
                    <a
                      href="mailto:maithanigoku@gmail.com"
                      className="hover:text-primary transition break-all"
                    >
                      maithanigoku@gmail.com
                    </a>
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

              <div className="rounded-2xl overflow-hidden border border-white/15 h-48 sm:h-56">
                <iframe
                  title="Rishikesh, Uttarakhand"
                  src="https://maps.google.com/maps?q=Rishikesh%2C%20Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale-[0.6] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-linen-light p-6 sm:p-10 md:p-14">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}