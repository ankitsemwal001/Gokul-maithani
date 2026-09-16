import React, { useState } from "react";
import Reveal from "./Reveal";

const CATEGORIES = ["All", "Asanas & Balance", "Pranayama & Stillness", "Alignment & Healing"];

const GALLERY_ITEMS = [
  {
    title: "Natarajasana",
    subtitle: "Lord of the Dance Pose — Balance & Grace",
    img: "/assets/natraj asan.png",
    category: "Asanas & Balance",
    tag: "Balance",
  },
  {
    title: "Bakasana (Crow Pose)",
    subtitle: "Arm Balance & Core Compression",
    img: "/assets/vakasan.png",
    category: "Asanas & Balance",
    tag: "Strength",
  },
  {
    title: "Mayurasana (Peacock Pose)",
    subtitle: "Advanced Mastery & Digestive Vitality",
    img: "/assets/mayurasana.png",
    category: "Asanas & Balance",
    tag: "Mastery",
  },
  {
    title: "Pranayama Breathwork",
    subtitle: "Nadi Shodhana & Inner Stillness",
    img: "/assets/pranayama.PNG",
    category: "Pranayama & Stillness",
    tag: "Mindfulness",
  },
  {
    title: "Veerbhadrasana (Warrior II)",
    subtitle: "Grounded Stance & Focus",
    img: "/assets/veerbhadrasana.jpeg",
    category: "Alignment & Healing",
    tag: "Alignment",
  },
  {
    title: "Bhujangasana (Cobra Pose)",
    subtitle: "Spinal Mobility & Heart Opening",
    img: "/assets/bhujang asana.jpeg",
    category: "Alignment & Healing",
    tag: "Therapy",
  },
  {
    title: "Trikonasana (Triangle Pose)",
    subtitle: "Lateral Flexibility & Hip Opening",
    img: "/assets/trikon asan.jpeg",
    category: "Alignment & Healing",
    tag: "Mobility",
  },
  {
    title: "Ustrasana (Camel Pose)",
    subtitle: "Deep Backbend & Vitality",
    img: "/assets/ustrasana.jpeg",
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
    <section id="gallery" className="py-28 max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="text-center max-w-7xl mx-auto mb-14">
          <span className="eyebrow">Life at the Shala</span>
          <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
            Practice & Postures Gallery
          </h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            A glimpse into authentic postures, precision alignment, and serene moments from our Rishikesh classes.
          </p>
        </div>
      </Reveal>

      {/* Filter Tabs */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition duration-300 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Reveal key={item.title} className="h-full">
            <div className="group relative rounded-3xl overflow-hidden card bg-linen h-80 flex flex-col justify-end shadow-soft hover:shadow-card transition duration-500">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover saturate-[0.9] group-hover:scale-108 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition duration-300"></div>

              <div className="relative z-10 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                  {item.tag}
                </span>
                <h4 className="font-display font-semibold text-lg text-white group-hover:text-primary transition">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
