import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const GOALS = [
  {
    id: "beginner",
    title: "Start from Scratch",
    desc: "Gentle step-by-step introduction",
    icon: "🌱",
  },
  {
    id: "stress",
    title: "Stress Relief & Calm",
    desc: "Breathwork, mind quieting & meditation",
    icon: "🕊️",
  },
  {
    id: "flexibility",
    title: "Flexibility & Alignment",
    desc: "Postures held with deep breath awareness",
    icon: "🧘‍♂️",
  },
  {
    id: "strength",
    title: "Strength & Stamina",
    desc: "Dynamic flow, heat & discipline",
    icon: "🔥",
  },
  {
    id: "healing",
    title: "Pain Relief & Recovery",
    desc: "Back, neck & joint rehabilitation",
    icon: "🌿",
  },
];

const EXPERIENCES = [
  { id: "new", label: "Complete Beginner", sub: "Never done yoga before" },
  { id: "some", label: "Some Experience", sub: "Done a few classes/videos" },
  { id: "regular", label: "Regular Practitioner", sub: "Practice consistently" },
];

const RECOMMENDATIONS = {
  "beginner": {
    name: "Beginner Yoga",
    badge: "Best for Starting Out",
    desc: "A patient, comfortable foundation designed to build body confidence, teach safe breathing, and establish lifelong healthy habits.",
    img: "/assets/ek-pada-vakasana-arm-balance-yoga-rishikesh.webp",
    path: "/beginner-yoga-rishikesh",
    focus: ["Basic postures (Asanas)", "Body awareness & posture", "Gentle pacing & guidance"],
    timing: "Mon – Sat (7:30 AM)",
  },
  "stress": {
    name: "Pranayama & Meditation",
    badge: "Mind-Body Serenity",
    desc: "Calm the nervous system, lower cortisol, and unlock emotional tranquility through classical yogic breathing and mindfulness techniques.",
    img: "/assets/pranayama-breathing-yoga-rishikesh.webp",
    path: "/pranayama-meditation-rishikesh",
    focus: ["Nadi Shodhana & Kapalabhati", "Guided mindfulness", "Stress & anxiety reduction"],
    timing: "Mon – Fri (7:00 PM)",
  },
  "flexibility": {
    name: "Hatha Yoga",
    badge: "Classic Yogic Discipline",
    desc: "Deep somatic stretches and steady posture holds combined with conscious breathing to enhance full-body mobility and structural balance.",
    img: "/assets/bakasana-crow-pose-yoga-rishikesh.webp",
    path: "/hatha-yoga-rishikesh",
    focus: ["Mobility", "Alignment"],
    timing: "Mon – Sat (6:00 AM)",
  },
  "strength": {
    name: "Ashtanga Yoga",
    badge: "Dynamic & Energizing",
    desc: "A rigorous, synchronized series of postures driven by ujjayi breath that builds powerful core strength, endurance, and mental focus.",
    img: "/assets/natarajasana-dancer-pose-yoga-rishikesh.webp",
    path: "/ashtanga-yoga-rishikesh",
    focus: ["Dynamic vinyasa transitions", "Core & arm balance", "Detoxifying internal heat"],
    timing: "Mon – Sat (6:00 AM / 5:30 PM)",
  },
  "healing": {
    name: "Therapeutic Yoga",
    badge: "Healing & Rehabilitation",
    desc: "Specialized biomechanical yoga sequences tailored for spinal decompression, neck stiffness, postural imbalances, and restorative healing.",
    img: "/assets/virabhadrasana-warrior-pose-yoga-rishikesh.webp",
    path: "/therapeutic-yoga-rishikesh",
    focus: ["Spine & joint safety", "Gentle corrective poses", "Ergonomic recovery"],
    timing: "Custom & Group Batches",
  },
};

export default function ClassFinder() {
  const [selectedGoal, setSelectedGoal] = useState("flexibility");
  const [selectedExp, setSelectedExp] = useState("some");

  // Dynamic recommendation based on choices
  let recommendedKey = selectedGoal;
  if (selectedExp === "new" && selectedGoal !== "stress" && selectedGoal !== "healing") {
    recommendedKey = "beginner";
  }

  const rec = RECOMMENDATIONS[recommendedKey] || RECOMMENDATIONS["flexibility"];

  return (
    <section id="class-finder" className="py-16 sm:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow">Personalized Path</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-sage-dark mt-3 leading-tight">
              Find Your Perfect Practice
            </h2>
            <p className="text-charcoal/75 text-sm sm:text-lg mt-3 leading-relaxed">
              Not sure where to begin? Select your goal and experience level to see the ideal class for your body.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <Reveal>
              <div className="card p-5 sm:p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-sage-dark">
                    What is your primary wellness goal?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  {GOALS.map((goal) => {
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`text-left p-3.5 sm:p-4 rounded-2xl border transition duration-300 flex items-start gap-3 sm:gap-3.5 ${
                          isSelected
                            ? "bg-sage-dark text-white border-sage-dark shadow-soft scale-[1.01]"
                            : "bg-white/80 hover:bg-white border-sage/20 text-charcoal"
                        }`}
                      >
                        <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{goal.icon}</span>
                        <div>
                          <div className={`font-semibold text-sm ${isSelected ? "text-white" : "text-sage-dark"}`}>
                            {goal.title}
                          </div>
                          <div className={`text-xs mt-0.5 ${isSelected ? "text-white/80" : "text-charcoal/60"}`}>
                            {goal.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="card p-5 sm:p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-sage-dark">
                    What is your experience level?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                  {EXPERIENCES.map((exp) => {
                    const isSelected = selectedExp === exp.id;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => setSelectedExp(exp.id)}
                        className={`text-left p-3.5 sm:p-4 rounded-2xl border transition duration-300 ${
                          isSelected
                            ? "bg-sage-dark text-white border-sage-dark shadow-soft"
                            : "bg-white/80 hover:bg-white border-sage/20 text-charcoal"
                        }`}
                      >
                        <div className={`font-semibold text-sm ${isSelected ? "text-white" : "text-sage-dark"}`}>
                          {exp.label}
                        </div>
                        <div className={`text-xs mt-0.5 sm:mt-1 ${isSelected ? "text-white/80" : "text-charcoal/60"}`}>
                          {exp.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Dynamic Result Card */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="card overflow-hidden border-2 border-primary/40 bg-white shadow-card relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={rec.img}
                    alt={rec.name}
                    decoding="async"
                    className="w-full h-full object-cover saturate-[0.9] transition duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-soft">
                      {rec.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <div className="text-[10px] sm:text-xs font-bold text-sage uppercase tracking-widest mb-1">
                    Recommended Match
                  </div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-sage-dark mb-2 sm:mb-3">
                    {rec.name}
                  </h4>
                  <p className="text-charcoal/75 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {rec.desc}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-charcoal/60 shrink-0">
                        Key Highlights:
                      </span>
                      {rec.focus.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full text-sage-dark text-xs sm:text-sm bg-sage/10 px-2.5 py-0.5"
                        >
                          <span>• {item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-5 border-t border-sage/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <Link
                      to={rec.path}
                      className="btn-primary flex-1 py-3 text-xs sm:text-sm text-center"
                    >
                      Class Details →
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-outline flex-1 py-3 text-xs sm:text-sm text-center"
                    >
                      Book Trial
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
