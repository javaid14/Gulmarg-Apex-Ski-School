import Link from "next/link";
import { Phone } from "lucide-react";

export default function BookingSidebar({ price }) {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-28 rounded-2xl border border-alpine-950/10 bg-white p-7 shadow-lg shadow-alpine-950/5">
        <p className="text-sm text-slate-500 mb-1">Starting from</p>
        <p className="font-display font-extrabold text-3xl text-alpine-950 mb-6">
          {price}
          <span className="text-base font-medium text-slate-500">
            {" "}
            / person
          </span>
        </p>
        <Link
          href="/contact-us"
          className="block w-full rounded-full bg-ember-500 hover:bg-ember-600 transition-colors py-3.5 text-center font-semibold text-alpine-950 mb-3"
        >
          Enquire Now
        </Link>
        <a
          href="tel:+917051566436"
          className="flex items-center justify-center gap-2 w-full rounded-full border border-alpine-950/10 py-3.5 text-center font-semibold text-alpine-950 hover:bg-alpine-950/5 transition-colors"
        >
          <Phone className="h-4 w-4" /> +91 7051566436
        </a>
      </div>
    </aside>
  );
}
