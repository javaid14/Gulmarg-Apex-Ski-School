"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const trimmed = value.trim();

  switch (name) {
    case "name":
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      return "";

    case "phone":
      if (!trimmed) return "Please enter a phone number.";
      if (!PHONE_REGEX.test(trimmed))
        return "Please enter a valid phone number.";
      return "";

    case "email":
      if (!trimmed) return "Please enter your email.";
      if (!EMAIL_REGEX.test(trimmed))
        return "Please enter a valid email address.";
      return "";

    case "message":
      if (!trimmed) return "Please enter a message.";
      if (trimmed.length < 10) return "Message must be at least 10 characters.";
      return "";

    default:
      return "";
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (touched[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  }

  function validateAll(payload) {
    const fields = ["name", "phone", "email", "message"];
    const errors = {};
    fields.forEach((field) => {
      const message = validateField(field, payload[field] || "");
      if (message) errors[field] = message;
    });
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    const errors = validateAll(payload);
    setFieldErrors(errors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-alpine-950 mb-1.5">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.name}
            className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500 ${
              fieldErrors.name ? "border-red-500" : "border-alpine-950/15"
            }`}
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-600 mt-1">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-alpine-950 mb-1.5">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.phone}
            className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500 ${
              fieldErrors.phone ? "border-red-500" : "border-alpine-950/15"
            }`}
          />
          {fieldErrors.phone && (
            <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-alpine-950 mb-1.5">
          Email
        </label>
        <input
          name="email"
          type="email"
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!fieldErrors.email}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500 ${
            fieldErrors.email ? "border-red-500" : "border-alpine-950/15"
          }`}
        />
        {fieldErrors.email && (
          <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-alpine-950 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!fieldErrors.message}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember-500 ${
            fieldErrors.message ? "border-red-500" : "border-alpine-950/15"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
        )}
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
