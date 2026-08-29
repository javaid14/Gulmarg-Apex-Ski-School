"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try calling or WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-alpine-950/10 p-8 bg-ice-100/60">
        <p className="font-display font-semibold text-lg text-alpine-950 mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-slate-600">
          We&apos;ll get back to you shortly. In the meantime, feel free to call
          or WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-alpine-950 mb-1.5">
            Full Name
          </label>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-lg border border-alpine-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-alpine-950 mb-1.5">
            Phone Number
          </label>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-alpine-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-alpine-950 mb-1.5">
          Email
        </label>
        <input
          required
          name="email"
          type="email"
          className="w-full rounded-lg border border-alpine-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-alpine-950 mb-1.5">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-lg border border-alpine-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full bg-ember-500 hover:bg-ember-600 transition-colors px-8 py-3.5 font-semibold text-alpine-950 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
