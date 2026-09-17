import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const TIERS = [
  {
    name: "Trial Orientation",
    price: "Free",
    period: "1 First Session",
    desc: "Experience the studio atmosphere and Gokul's alignment guidance with zero commitment.",
    featured: false,
    badge: null,
    features: [
      "1 Interactive In-Person / Online Session",
      "Body posture & flexibility assessment",
      "Q&A and personal batch recommendation",
      "Access to studio props & mat",
    ],
    ctaText: "Book Free Trial",
    ctaLink: "/contact",
    btnStyle: "btn-outline w-full py-3.5 text-sm block text-center",
  },
  {
    name: "Monthly Group Batch",
    price: "₹2,500",
    period: "/ month (Mon – Sat)",
    desc: "Our most popular membership for steady habit formation, energy, and lifelong strength.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Daily Morning or Evening Batch (6 Days/Wk)",
      "Continuous posture & alignment correction",
      "Pranayama & mindfulness at every session",
      "Small batch size (max 8–10 students)",
      "WhatsApp community & teacher support",
    ],
    ctaText: "Join Monthly Batch",
    ctaLink: "/contact",
    btnStyle: "btn-primary w-full py-3.5 text-sm block text-center",
  },
  {
    name: "1-on-1 Private Coaching",
    price: "₹6,000",
    period: "/ 10 Personalized Sessions",
    desc: "Intensive 1-on-1 guidance tailored to your specific anatomy, injuries, or busy schedule.",
    featured: false,
    badge: "Personalized",
    features: [
      "Custom tailored curriculum & timings",
      "Therapeutic yoga for back/neck pain",
      "Advanced asana & arm balance training",
      "Detailed biomechanics analysis",
      "Direct phone/chat access to Gokul",
    ],
    ctaText: "Request Private Session",
    ctaLink: "/contact",
    btnStyle: "btn-outline w-full py-3.5 text-sm block text-center",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <span className="eyebrow">Membership & Investment</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
              Simple, Transparent Plans
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-lg mt-3 leading-relaxed">
              Invest in your health and peace of mind. Choose the schedule that fits your daily routine.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TIERS.map((tier) => (
            <Reveal key={tier.name} className="h-full">
              <div
                className={`card p-6 sm:p-8 h-full flex flex-col justify-between relative transition duration-300 ${
                  tier.featured
                    ? "bg-white border-2 border-primary shadow-card ring-4 ring-primary/10 lg:-translate-y-2"
                    : "bg-linen-light hover:border-sage/40 hover:shadow-soft"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        tier.featured
                          ? "bg-primary text-white shadow-soft"
                          : "bg-sage-dark text-white"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-sage-dark mb-1.5 sm:mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-charcoal/65 leading-relaxed min-h-0 sm:min-h-[36px] mb-5 sm:mb-6">
                    {tier.desc}
                  </p>

                  <div className="flex items-baseline gap-1 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-sage/15">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-sage-dark">
                      {tier.price}
                    </span>
                    <span className="text-xs text-charcoal/60 font-medium">
                      {tier.period}
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs text-charcoal/80 font-medium">
                        <svg
                          className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link to={tier.ctaLink} className={tier.btnStyle}>
                    {tier.ctaText}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom inquiry sub-banner */}
        <Reveal>
          <div className="mt-10 sm:mt-14 bg-linen-light rounded-2xl p-5 sm:p-6 border border-sage/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-display font-semibold text-sage-dark text-base sm:text-lg">
                Need a Custom Corporate or Institutional Batch?
              </h4>
              <p className="text-xs text-charcoal/70 mt-0.5">
                We also conduct wellness workshops for corporate teams, colleges, and private groups in Rishikesh.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 text-primary font-bold text-xs sm:text-sm underline underline-offset-4 hover:text-primary-dark"
            >
              Contact for Custom Quote →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
