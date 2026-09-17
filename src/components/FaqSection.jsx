import React, { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "I am not flexible at all. Can I still join yoga classes?",
    a: "Absolutely. Saying you are too stiff for yoga is like saying you are too dirty to take a bath. Flexibility is the byproduct of yoga, not the prerequisite. Gokul's classes start with basic anatomical cues, props, and gentle modifications so beginners feel completely supported.",
  },
  {
    q: "What should I wear and bring to my first class?",
    a: "Wear comfortable, breathable athletic clothing that allows you to move freely (stretchy pants and a comfortable t-shirt). Clean yoga mats and props (blocks, straps, cushions) are provided at the studio, but you are welcome to bring your own personal mat and a water bottle.",
  },
  {
    q: "Can yoga help with my lower back pain, neck stiffness, or old injuries?",
    a: "Yes. Our Therapeutic Yoga and alignment-focused Hatha classes are specifically designed to safely decompress the spine, strengthen the core stabilizers, and release chronic tension. Please inform Gokul about any pre-existing conditions or injuries before starting.",
  },
  {
    q: "Do you offer online sessions for students outside Rishikesh?",
    a: "Yes! We conduct interactive live online sessions for practitioners worldwide via Zoom / Google Meet. You will receive live visual corrections and posture feedback just like in-person studio batches.",
  },
  {
    q: "How does the free trial class work?",
    a: "You can book a trial class directly through our website form or WhatsApp. During this session, you will experience Gokul's teaching style, receive an initial posture evaluation, and discuss the best batch schedule for your personal goals.",
  },
  {
    q: "What makes Gokul Maithani's teaching approach unique?",
    a: "Gokul combines classical Rishikesh yogic traditions (Hatha, Ashtanga, Pranayama) with modern biomechanics and breath control. The focus is never on rushing into complex shapes, but on mindful alignment, breath harmony, and sustainable longevity.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Header */}
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-12">
            <span className="eyebrow">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-lg mt-3 leading-relaxed">
              Everything you need to know about joining our classes, studio practice, and private sessions.
            </p>
          </div>
        </Reveal>

        {/* Centered Questions List */}
        <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx}>
                <div
                  className={`card transition-all duration-300 overflow-hidden ${
                    isOpen ? "bg-white border-primary/40 shadow-soft" : "bg-linen-light hover:bg-white/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left py-3.5 px-4 sm:py-4 sm:px-5.5 flex items-center justify-between gap-3 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-sage-dark leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-sage/15 text-sage-dark"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-3.5 sm:px-5.5 sm:pb-4.5 text-charcoal/75 text-xs sm:text-sm leading-relaxed border-t border-sage/10 pt-3 animate-fade-in-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
