import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Gulmarg Apex Ski School",
  description:
    "Get in touch with Gulmarg Apex Ski School to plan your skiing or adventure trip.",
};

const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/917051566436",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.33 1.46.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.13.07.71-.17 1.39z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/gulmargapexskischool",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.85 5.85 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.85 5.85 0 0 0 2.13 1.38c.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.85 5.85 0 0 0 2.13-1.38 5.85 5.85 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.38-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/gulmargapexskischool",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="max-w-2xl mb-14">
        <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
          Contact Us
        </p>
        <h1 className="font-display font-bold text-4xl text-alpine-950 mb-4">
          Let&apos;s Plan Your Trip
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Have a question about a package or want a custom itinerary? Reach out
          and we&apos;ll get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:items-stretch">
        <div className="lg:col-span-1">
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-7">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-ember-500 shrink-0" />
                <p className="text-slate-700">
                  Gulmarg, Jammu and Kashmir 193403
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-ember-500 shrink-0" />
                <a
                  href="tel:+917051566436"
                  className="text-slate-700 hover:text-ember-600 transition-colors"
                >
                  +91 7051566436
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-ember-500 shrink-0" />
                <a
                  href="mailto:info@gulmargapexskischool.com"
                  className="text-slate-700 hover:text-ember-600 transition-colors"
                >
                  admin@gulmargapexskischool.com
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-alpine-950/10 pt-7">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-alpine-950/5 text-alpine-950 transition-colors hover:bg-ember-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
