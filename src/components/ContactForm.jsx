import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (form.name.trim().length < 2) newErrors.name = true;
    if (form.phone.trim().length < 10) newErrors.phone = true;
    if (form.message.trim().length < 3) newErrors.message = true;
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSending(true);

    const text = `New Yoga Enquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const whatsapp = "https://wa.me/918979400645?text=" + encodeURIComponent(text);

    setTimeout(() => {
      window.open(whatsapp, "_blank");
      setSending(false);
      setForm({ name: "", phone: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }, 900);
  };

  const inputClass =
    "w-full rounded-xl border border-sage/30 bg-white px-5 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-charcoal/80">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Example: Rahul Sharma"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Please enter your name</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-charcoal/80">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Example: +91 98765 43210"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              Enter a valid phone number
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-charcoal/80">
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Example: I want to join the morning yoga batch. Please share details."
            value={form.message}
            onChange={update("message")}
            className={inputClass}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">Message cannot be empty</p>
          )}
        </div>

        <button
          disabled={sending}
          className="w-full bg-primary text-white font-bold py-4 rounded-full flex justify-center items-center gap-3 hover:bg-primary-dark hover:shadow-card transition disabled:opacity-70"
        >
          <span>{sending ? "Opening WhatsApp..." : "Send Enquiry"}</span>
          {sending && (
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
                className="opacity-75"
              />
            </svg>
          )}
        </button>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 max-w-sm text-center shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-dark">
              Message Ready
            </h3>
            <p className="text-charcoal/60 mb-6">
              WhatsApp chat opened. Just press send to complete your enquiry.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}