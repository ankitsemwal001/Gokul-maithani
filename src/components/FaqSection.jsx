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
    <section id="faq" className="py-28 bg-gradient-to-b from-linen via-sage-light/30 to-linen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-16">
            <span className="eyebrow">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal/70 mt-4 leading-relaxed">
              Everything you need to know about joining our classes, studio practice, and private sessions.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx}>
                <div
                  className={`card transition duration-300 overflow-hidden ${
                    isOpen ? "bg-white border-primary/40 shadow-soft" : "bg-linen-light"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-lg md:text-xl text-sage-dark">
                      {faq.q}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-sage/15 text-sage-dark"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
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
                    <div className="px-6 md:px-7 pb-6 md:pb-7 text-charcoal/75 text-sm md:text-base leading-relaxed border-t border-sage/10 pt-4 animate-fade-in-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <Reveal>
          <div className="mt-14 text-center">
            <p className="text-charcoal/70 text-sm mb-4">
              Have a specific question about your health or class timing?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm underline underline-offset-8 hover:text-primary-dark transition"
            >
              Ask Gokul Directly via WhatsApp / Contact Form →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
