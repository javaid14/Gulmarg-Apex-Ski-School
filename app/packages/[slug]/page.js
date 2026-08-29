import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Clock, Phone } from 'lucide-react';
import { allPackages, getPackageBySlug } from '@/data/packages';

export function generateStaticParams() {
  return allPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Gulmarg Ski Himalaya`,
    description: pkg.summary,
  };
}

export default function PackageDetailPage({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return notFound();

  return (
    <div>
      <section className="relative h-[46vh] min-h-[340px] w-full">
        <Image src={pkg.image} alt={pkg.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-950 via-alpine-950/50 to-alpine-950/20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-8 pb-12">
          <span className="mb-3 w-fit rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-alpine-950">
            {pkg.category}
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-snow max-w-3xl text-balance">
            {pkg.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-ice-200">
            <Clock className="h-5 w-5" /> {pkg.duration}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-4">Overview</h2>
          <p className="text-slate-600 leading-relaxed mb-10">{pkg.summary}</p>

          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-5">What&apos;s Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {pkg.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-ember-500" /> {h}
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-5">Itinerary</h2>
          <div className="space-y-5">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="rounded-xl border border-alpine-950/10 p-5">
                <p className="font-display font-semibold text-ember-600 mb-1">{day.day}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{day.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-alpine-950/10 bg-white p-7 shadow-lg shadow-alpine-950/5">
            <p className="text-sm text-slate-500 mb-1">Starting from</p>
            <p className="font-display font-extrabold text-3xl text-alpine-950 mb-6">{pkg.price}<span className="text-base font-medium text-slate-500"> / person</span></p>
            <Link
              href="/contact-us"
              className="block w-full rounded-full bg-ember-500 hover:bg-ember-600 transition-colors py-3.5 text-center font-semibold text-alpine-950 mb-3"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+919622448850"
              className="flex items-center justify-center gap-2 w-full rounded-full border border-alpine-950/10 py-3.5 text-center font-semibold text-alpine-950 hover:bg-alpine-950/5 transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 96224 48850
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
