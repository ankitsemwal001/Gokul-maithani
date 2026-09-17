import React, { useState } from "react";
import Reveal from "./Reveal";

const CATEGORIES = ["All", "Asanas & Balance", "Pranayama & Stillness", "Alignment & Healing"];

const GALLERY_ITEMS = [
  {
    title: "Natarajasana",
    subtitle: "Lord of the Dance Pose — Balance & Grace",
    img: "/assets/natarajasana-dancer-pose-yoga-rishikesh.webp",
    category: "Asanas & Balance",
    tag: "Balance",
  },
  {
    title: "Bakasana (Crow Pose)",
    subtitle: "Arm Balance & Core Compression",
    img: "/assets/bakasana-crow-pose-yoga-rishikesh.webp",
    category: "Asanas & Balance",
    tag: "Strength",
  },
  {
    title: "Mayurasana (Peacock Pose)",
    subtitle: "Advanced Mastery & Digestive Vitality",
    img: "/assets/mayurasana-peacock-pose-yoga-rishikesh.webp",
    category: "Asanas & Balance",
    tag: "Mastery",
  },
  {
    title: "Pranayama Breathwork",
    subtitle: "Nadi Shodhana & Inner Stillness",
    img: "/assets/pranayama-breathing-yoga-rishikesh.webp",
    category: "Pranayama & Stillness",
    tag: "Mindfulness",
  },
  {
    title: "Veerbhadrasana (Warrior II)",
    subtitle: "Grounded Stance & Focus",
    img: "/assets/virabhadrasana-warrior-pose-yoga-rishikesh.webp",
    category: "Alignment & Healing",
    tag: "Alignment",
  },
  {
    title: "Bhujangasana (Cobra Pose)",
    subtitle: "Spinal Mobility & Heart Opening",
    img: "/assets/bhujangasana-cobra-pose-rishikesh.webp",
    category: "Alignment & Healing",
    tag: "Therapy",
  },
  {
    title: "Trikonasana (Triangle Pose)",
    subtitle: "Lateral Flexibility & Hip Opening",
    img: "/assets/trikonasana-triangle-pose-yoga-rishikesh.webp",
    category: "Alignment & Healing",
    tag: "Mobility",
  },
  {
    title: "Ustrasana (Camel Pose)",
    subtitle: "Deep Backbend & Vitality",
    img: "/assets/ustrasana-camel-pose-yoga-rishikesh.webp",
    category: "Asanas & Balance",
    tag: "Flexibility",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-28 bg-sage-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow">Life at the Shala</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
              Practice &amp; Postures Gallery
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-lg mt-3 leading-relaxed">
              A glimpse into authentic postures, precision alignment, and serene moments from our Rishikesh classes.
            </p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide transition duration-300 ${
                  activeTab === cat
                    ? "bg-sage-dark text-white shadow-soft"
                    : "bg-sage/10 text-charcoal/80 hover:bg-sage/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Reveal key={item.title} className="h-full">
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden card bg-linen h-72 sm:h-80 flex flex-col justify-end shadow-soft hover:shadow-card transition duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover saturate-[0.9] group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition duration-300"></div>

                <div className="relative z-10 p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/90 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>
                  <h4 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-primary transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 mt-0.5 sm:mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
