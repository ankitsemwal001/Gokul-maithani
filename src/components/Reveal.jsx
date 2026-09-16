import React from "react";
import { useEffect, useRef } from "react";

let observer;
if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
}

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    if (observer && observer.observe) {
      observer.observe(el);
    } else {
      el.classList.add("is-revealed");
    }
    return () => observer?.unobserve?.(el);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}