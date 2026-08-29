import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Gulmarg Apex Ski School",
  description:
    "Get in touch with Gulmarg Apex Ski School to plan your skiing or adventure trip.",
};

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-ember-500 shrink-0" />
            <p className="text-slate-700">Gulmarg, Jammu and Kashmir 193403</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-6 w-6 text-ember-500 shrink-0" />
            <a
              href="tel:+919622448850"
              className="text-slate-700 hover:text-ember-600"
            >
              +91 7051566436
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-6 w-6 text-ember-500 shrink-0" />
            <a
              href="mailto:info@gulmargskihimalaya.com"
              className="text-slate-700 hover:text-ember-600"
            >
              info@gulmargapexskischool.com
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
