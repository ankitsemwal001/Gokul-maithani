import React, { lazy, Suspense } from "react";
import Reveal from "./Reveal";
import LazySection from "./LazySection";

// Swiper is heavy (~100 KB). It is only needed when the carousel is near the
// viewport, so it is loaded on demand via dynamic import.
const ClassesCarousel = lazy(() => import("./ClassesCarousel"));

// Placeholder height mirrors the loaded carousel so layout is stable while
// the swiper chunk loads (off-screen thanks to the generous rootMargin).
function CarouselFallback() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center h-[466px] xs:h-[496px] sm:h-[542px]">
        <div className="w-10 h-10 border-3 border-sage/20 border-t-primary rounded-full animate-spin"></div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6 h-2.5"></div>
      <div className="text-center mt-8 sm:mt-12 h-14 sm:h-16"></div>
    </>
  );
}

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

        <LazySection
          rootMargin="800px"
          fallback={<CarouselFallback />}
        >
          <Suspense fallback={<CarouselFallback />}>
            <ClassesCarousel />
          </Suspense>
        </LazySection>
      </div>
    </section>
  );
}