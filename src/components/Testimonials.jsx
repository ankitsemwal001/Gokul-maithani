import React, { useState } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Practicing with Gokul has completely changed my posture and relieved my back pain. His attention to detail is unmatched.",
    img: "/assets/ankit.jpg",
    alt: "Ankit Semwal",
    name: "Ankit Semwal",
    role: "Fourth Year Student",
    url: "https://www.instagram.com/_ankit_semwal_/",
  },
  {
    quote:
      "The meditation techniques I learned here have significantly helped me manage my work stress. It's the highlight of my day.",
    img: "/assets/student2.jpg",
    alt: "Kiran Nautiyal",
    name: "Kiran Nautiyal",
    role: "Corporate Professional",
    url: "https://www.instagram.com/kiran.kirannautiyal.984/",
  },
  {
    quote:
      "I started as a complete beginner and felt so welcomed. Gokul's teaching style is patient, encouraging, and clear.",
    img: "/assets/student3.jpg",
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
    <section className="py-28 max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="text-center max-w-7xl mx-auto mb-20">
          <span className="eyebrow">Student Voice</span>
          <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
            What Our Students Say
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <Reveal key={t.name} className="h-full">
            <div className="card p-9 h-full flex flex-col relative">
              <span className="text-primary font-display text-6xl leading-none h-10 block">
                "
              </span>
              <p className="text-charcoal/75 italic leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <StudentAvatar t={t} />
                <div>
                  <h5 className="font-display font-semibold text-sage-dark text-lg">
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
                  <p className="text-sm text-charcoal/55">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
