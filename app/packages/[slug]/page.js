import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Phone } from "lucide-react";
import { allPackages, getPackageBySlug } from "@/data/packages";
import BookingSidebar from "@/components/BookingSidebar";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return allPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Gulmarg Apex Ski School`,
    description: pkg.summary,
  };
}

export default function PackageDetailPage({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return notFound();

  return (
    <div>
      <section className="relative h-[46vh] min-h-[380px] w-full">
        <Image
          src={withBasePath(pkg.image)}
          alt={pkg.title}
          fill
          priority
          className="object-cover"
        />
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
          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-4">
            Overview
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">{pkg.summary}</p>

          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-5">
            What&apos;s Included
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {pkg.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-slate-700"
              >
                <Check className="h-5 w-5 shrink-0 text-ember-500" /> {h}
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-2xl text-alpine-950 mb-5">
            Itinerary
          </h2>
          <div className="space-y-5">
            {pkg.itinerary.map((day) => (
              <div
                key={day.day}
                className="rounded-xl border border-alpine-950/10 p-5"
              >
                <p className="font-display font-semibold text-ember-600 mb-1">
                  {day.day}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {day.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <BookingSidebar price={pkg.price} />
        </aside>
      </section>
    </div>
  );
}
