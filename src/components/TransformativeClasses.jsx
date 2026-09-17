import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import Reveal from "./Reveal";

// Swiper core & module styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CLASSES_DATA = [
  {
    tag: "Gokul Maithani Yoga",
    title: "Hatha Yoga",
    desc: "Foundational practice focusing on physical postures, anatomical alignment, and conscious breathing techniques to build stability and balance.",
img: "/assets/bakasana-crow-pose-yoga-rishikesh.webp",
    path: "/hatha-yoga-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Ashtanga Yoga",
    desc: "Dynamic and structured sequences combining synchronized breath, strength, flexibility, and internal heat for deep transformation.",
    img: "/assets/natarajasana-dancer-pose-yoga-rishikesh.webp",
    path: "/ashtanga-yoga-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Pranayama & Meditation",
    desc: "Ancient breathwork and guided mindfulness practices to calm the nervous system, release mental fatigue, and awaken inner tranquility.",
    img: "/assets/pranayama-breathing-yoga-rishikesh.webp",
    path: "/pranayama-meditation-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Therapeutic Yoga",
    desc: "Personalized restorative sequences designed for injury recovery, posture correction, joint mobility, and long-term chronic pain relief.",
    img: "/assets/virabhadrasana-warrior-pose-yoga-rishikesh.webp",
    path: "/therapeutic-yoga-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Beginner Yoga",
    desc: "A gentle, step-by-step introduction tailored for newcomers to build flexibility, confidence, and foundational movement habits.",
    img: "/assets/ek-pada-vakasana-arm-balance-yoga-rishikesh.webp",
    path: "/beginner-yoga-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Vinyasa & Flow",
    desc: "Fluid, breath-synchronized movement that challenges stamina, improves cardiovascular endurance, and connects body with mind.",
    img: "/assets/mayurasana-peacock-pose-yoga-rishikesh.webp",
    path: "/vinyasa-yoga-rishikesh",
  },
  {
    tag: "Gokul Maithani Yoga",
    title: "Alignment & Mobility",
    desc: "Deep biomechanical focus on posture precision, core stability, and targeted stretching to unlock rigid muscle groups.",
    img: "/assets/bhujangasana-cobra-pose-yoga-rishikesh.webp",
    path: "/alignment-mobility-yoga-rishikesh",
  },
];

export default function TransformativeClasses() {
  return (
    <section
      id="classes"
      className="py-16 sm:py-24 md:py-28 bg-sage-light/60 relative overflow-hidden"
    >
      {/* Decorative subtle ambient background accents matching header width */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 h-96 pointer-events-none -z-0">
        <div className="w-full h-full bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-10 sm:mb-14 md:mb-16">
            <span className="eyebrow">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 mb-2 leading-tight">
              Transformative Yoga Classes in Rishikesh
            </h2>
            <h4 className="text-primary font-display font-medium text-base sm:text-xl md:text-2xl mt-2 mb-4 sm:mb-6">
              Heal &amp; Transform from Within
            </h4>
            <div className="space-y-2 sm:space-y-3 text-charcoal/75 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                At Gokul Maithani Yoga Studio, yoga is far more than physical
                exercise—it is a sacred journey toward self-discovery, vitality,
                and lifelong wellness.
              </p>
              <p className="text-xs sm:text-base text-charcoal/65">
                Rooted in authentic Himalayan traditions and guided by
                scientific alignment, our sessions are customized to balance your
                vital energies, build resilience, and restore natural harmony to
                body and mind.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Carousel Container: Cards strictly bounded inside between left and right arrows */}
        <div className="relative w-full flex items-center gap-1.5 xs:gap-2 sm:gap-4 md:gap-6">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous class"
            className="classes-swiper-button-prev shrink-0 z-40 flex items-center justify-center w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white text-sage-dark shadow-md sm:shadow-xl border sm:border-2 border-sage/20 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-6 sm:h-6 -translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Track Container (Enclosed between both arrows) */}
          <div className="flex-1 min-w-0 overflow-hidden py-2 sm:py-4">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              speed={600}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 15,
                stretch: 20,
                depth: 100,
                modifier: 1,
                scale: 0.92,
                slideShadows: false,
              }}
              pagination={{
                el: ".classes-swiper-pagination",
                clickable: true,
              }}
              navigation={{
                prevEl: ".classes-swiper-button-prev",
                nextEl: ".classes-swiper-button-next",
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full"
            >
              {CLASSES_DATA.map((cls, idx) => (
                <SwiperSlide
                  key={cls.title + idx}
                  className="!w-[250px] xs:!w-[280px] sm:!w-[310px] md:!w-[360px] select-none"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-charcoal h-[450px] xs:h-[480px] sm:h-[510px] flex flex-col justify-end text-center group transition-all duration-500 hover:shadow-primary/20">
                    {/* Background Image */}
                    <img
                      src={cls.img}
                      alt={cls.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out saturate-[0.9]"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for high readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/30 group-hover:from-charcoal group-hover:via-charcoal/80 transition-colors duration-500"></div>

                    {/* Decorative subtle border frame inside */}
                    <div className="absolute inset-2.5 sm:inset-3 rounded-2xl border border-white/10 pointer-events-none group-hover:border-primary/30 transition-colors duration-500"></div>

                    {/* Card Content */}
                    <div className="relative z-10 p-5 xs:p-6 sm:p-8 flex flex-col items-center justify-end h-full">
                      {/* Brand / Header Tag */}
                      <h4 className="text-primary text-[11px] sm:text-sm uppercase tracking-[0.2em] font-semibold mb-1.5 sm:mb-2 drop-shadow-sm">
                        {cls.tag}
                      </h4>

                      {/* Class Subtitle / Title */}
                      <div className="text-white font-display text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 tracking-wide">
                        {cls.title}
                      </div>

                      {/* Class Description */}
                      <div className="text-white/80 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4 font-normal">
                        <p>{cls.desc}</p>
                      </div>

                      {/* Button Wrapper */}
                      <div className="w-full pt-1">
                        <Link
                          to={cls.path}
                          className="inline-flex items-center justify-center gap-2 w-full max-w-[180px] sm:max-w-[200px] py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-bold text-xs uppercase tracking-widest bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                          LEARN MORE
                          <span className="text-sm">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next class"
            className="classes-swiper-button-next shrink-0 z-40 flex items-center justify-center w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white text-sage-dark shadow-md sm:shadow-xl border sm:border-2 border-sage/20 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-6 sm:h-6 translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Centered Pagination Bullets Below */}
        <div className="classes-swiper-pagination flex items-center justify-center gap-2 mt-5 sm:mt-6"></div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Reveal>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-sage-dark text-white font-bold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-primary hover:shadow-card hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider"
            >
              All Classes &amp; Enrollments
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
