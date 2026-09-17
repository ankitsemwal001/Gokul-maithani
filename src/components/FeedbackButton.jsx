import React from "react";
import { useState, useEffect } from "react";

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [breathe, setBreathe] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) setBreathe(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFeedback = () => {
    const message = encodeURIComponent(
      `Namaste Gokul ji \n\nI wanted to share my feedback about your yoga classes:\n\nRating: ____/5\n\nMy experience:\n________________________________\n\nThank you for the guidance!`
    );
    window.open(`https://wa.me/918979400645?text=${message}`, "_blank");
  };

  return (
    <>
      <button
        id="feedbackBtn"
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-primary text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-2xl transition z-40 ${
          breathe ? "animate-feedback-breathe" : ""
        }`}
        aria-label="Write a review"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h6m5 8l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-3z"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-sm sm:max-w-md w-full text-center shadow-2xl animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-sage-dark">
              Loved your yoga experience?
            </h3>
            <p className="text-charcoal/60 text-xs sm:text-sm mb-6 sm:mb-8">
              Share your feedback and help others start their journey.
            </p>
            <button
              onClick={handleFeedback}
              className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-dark transition mb-4"
            >
              Write Review on WhatsApp
            </button>
            <br />
            <button
              onClick={() => setOpen(false)}
              className="text-charcoal/50 text-xs sm:text-sm hover:text-sage-dark py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}