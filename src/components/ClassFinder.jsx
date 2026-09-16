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
    img: "/assets/ek pad vakasana.png",
    path: "/beginner-yoga",
    focus: ["Basic postures (Asanas)", "Body awareness & posture", "Gentle pacing & guidance"],
    timing: "Mon – Sat (7:30 AM)",
  },
  "stress": {
    name: "Pranayama & Meditation",
    badge: "Mind-Body Serenity",
    desc: "Calm the nervous system, lower cortisol, and unlock emotional tranquility through classical yogic breathing and mindfulness techniques.",
    img: "/assets/pranayama.PNG",
    path: "/pranayama",
    focus: ["Nadi Shodhana & Kapalabhati", "Guided mindfulness", "Stress & anxiety reduction"],
    timing: "Mon – Fri (7:00 PM)",
  },
  "flexibility": {
    name: "Hatha Yoga",
    badge: "Classic Yogic Discipline",
    desc: "Deep somatic stretches and steady posture holds combined with conscious breathing to enhance full-body mobility and structural balance.",
    img: "/assets/vakasan.png",
    path: "/hatha-yoga",
    focus: ["Hip & spine mobility", "Alignment principles", "Sustained holds"],
    timing: "Mon – Sat (6:00 AM)",
  },
  "strength": {
    name: "Ashtanga Yoga",
    badge: "Dynamic & Energizing",
    desc: "A rigorous, synchronized series of postures driven by ujjayi breath that builds powerful core strength, endurance, and mental focus.",
    img: "/assets/natraj asan.png",
    path: "/ashtanga",
    focus: ["Dynamic vinyasa transitions", "Core & arm balance", "Detoxifying internal heat"],
    timing: "Mon – Sat (6:00 AM / 5:30 PM)",
  },
  "healing": {
    name: "Therapeutic Yoga",
    badge: "Healing & Rehabilitation",
    desc: "Specialized biomechanical yoga sequences tailored for spinal decompression, neck stiffness, postural imbalances, and restorative healing.",
    img: "/assets/veerbhadrasana.jpeg",
    path: "/therapeutic",
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
    <section id="class-finder" className="py-24 bg-gradient-to-b from-linen via-sage-light/40 to-linen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Personalized Path</span>
            <h2 className="text-4xl md:text-5xl font-display text-sage-dark mt-4">
              Find Your Perfect Practice
            </h2>
            <p className="text-charcoal/70 mt-4 leading-relaxed">
              Not sure where to begin? Select your goal and experience level to see the ideal class for your body.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <div className="card p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h3 className="font-display font-semibold text-xl text-sage-dark">
                    What is your primary wellness goal?
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {GOALS.map((goal) => {
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`text-left p-4 rounded-2xl border transition duration-300 flex items-start gap-3.5 ${
                          isSelected
                            ? "bg-sage-dark text-white border-sage-dark shadow-soft scale-[1.01]"
                            : "bg-white/80 hover:bg-white border-sage/20 text-charcoal"
                        }`}
                      >
                        <span className="text-2xl shrink-0 mt-0.5">{goal.icon}</span>
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
              <div className="card p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h3 className="font-display font-semibold text-xl text-sage-dark">
                    What is your experience level?
                  </h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-3.5">
                  {EXPERIENCES.map((exp) => {
                    const isSelected = selectedExp === exp.id;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => setSelectedExp(exp.id)}
                        className={`text-left p-4 rounded-2xl border transition duration-300 ${
                          isSelected
                            ? "bg-sage-dark text-white border-sage-dark shadow-soft"
                            : "bg-white/80 hover:bg-white border-sage/20 text-charcoal"
                        }`}
                      >
                        <div className={`font-semibold text-sm ${isSelected ? "text-white" : "text-sage-dark"}`}>
                          {exp.label}
                        </div>
                        <div className={`text-xs mt-1 ${isSelected ? "text-white/80" : "text-charcoal/60"}`}>
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
                    className="w-full h-full object-cover saturate-[0.9] transition duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-soft">
                      {rec.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <div className="text-xs font-bold text-sage uppercase tracking-widest mb-1">
                    Recommended Match
                  </div>
                  <h4 className="font-display font-bold text-3xl text-sage-dark mb-3">
                    {rec.name}
                  </h4>
                  <p className="text-charcoal/75 text-sm leading-relaxed mb-6">
                    {rec.desc}
                  </p>

                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                      Key Highlights:
                    </div>
                    {rec.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-charcoal/80 font-medium">
                        <svg
                          className="w-4 h-4 text-primary shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-sage/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      to={rec.path}
                      className="btn-primary flex-1 py-3 text-sm text-center"
                    >
                      Class Details →
                    </Link>
                    <a
                      href="#contact"
                      className="btn-outline flex-1 py-3 text-sm text-center"
                    >
                      Book Trial
                    </a>
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
