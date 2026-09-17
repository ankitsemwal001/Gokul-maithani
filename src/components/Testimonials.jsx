import React, { useState } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Practicing with Gokul has completely changed my posture and relieved my back pain. His attention to detail is unmatched.",
    img: "/assets/gokul-maithani-yoga-student-ankit-rishikesh.webp",
    alt: "Ankit Semwal",
    name: "Ankit Semwal",
    role: "Fourth Year Student",
    url: "https://www.instagram.com/_ankit_semwal_/",
  },
  {
    quote:
      "The meditation techniques I learned here have significantly helped me manage my work stress. It's the highlight of my day.",
    img: "/assets/gokul-maithani-yoga-student-kiran-rishikesh.webp",
    alt: "Kiran Nautiyal",
    name: "Kiran Nautiyal",
    role: "Corporate Professional",
    url: "https://www.instagram.com/kiran.kirannautiyal.984/",
  },
  {
    quote:
      "I started as a complete beginner and felt so welcomed. Gokul's teaching style is patient, encouraging, and clear.",
    img: "/assets/gokul-maithani-yoga-student-elena-rishikesh.webp",
    alt: "Elena Rodriguez",
    name: "Elena Rodriguez",
    role: "New Practitioner",
    url: null,
  },
];

function StudentAvatar({ t }) {
  const [missing, setMissing] = useState(false);
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const ring = t.url
    ? "ring-2 ring-sage/40 hover:ring-primary transition"
    : "ring-2 ring-sage/30";

  return (
    <a
      href={t.url || "#"}
      target={t.url ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`block w-16 h-16 rounded-full overflow-hidden shrink-0 ${ring}`}
    >
      {!missing ? (
        <img
          src={t.img}
          alt={t.alt}
          loading="lazy"
          decoding="async"
          onError={() => setMissing(true)}
          className="w-full h-full object-cover saturate-[0.9]"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-sage/20 text-sage-dark font-display font-semibold text-lg">
          {initials}
        </div>
      )}
    </a>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <span className="eyebrow">Student Voice</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
              What Our Students Say
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name} className="h-full">
              <div className="card p-6 sm:p-9 h-full flex flex-col relative">
                <span className="text-primary font-display text-4xl sm:text-6xl leading-none h-8 sm:h-10 block">
                  "
                </span>
                <p className="text-charcoal/75 italic text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <StudentAvatar t={t} />
                  <div>
                    <h5 className="font-display font-semibold text-sage-dark text-base sm:text-lg">
                      {t.url ? (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-dark transition"
                        >
                          {t.name}
                        </a>
                      ) : (
                        t.name
                      )}
                    </h5>
                    <p className="text-xs sm:text-sm text-charcoal/55">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
