import PackageCard from "@/components/PackageCard";
import { packages, tours, treks } from "@/data/packages";

export const metadata = {
  title: "Packages | Gulmarg Apex Ski School",
  description:
    "Browse all skiing, snowboarding, tour, and trekking packages offered by Gulmarg Apex Ski School.",
};

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="max-w-2xl mb-14">
        <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
          All Packages
        </p>
        <h1 className="font-display font-bold text-4xl text-alpine-950 mb-4">
          Skiing, Touring & Trekking Packages
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Every package below includes expert guides, quality gear, and full
          logistics support so you can focus entirely on the experience.
        </p>
      </div>

      <h2 className="font-display font-semibold text-2xl text-alpine-950 mb-6">
        Skiing &amp; Snowboarding
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      <h2 className="font-display font-semibold text-2xl text-alpine-950 mb-6">
        Kashmir Tours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tours.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      <h2 className="font-display font-semibold text-2xl text-alpine-950 mb-6">
        Trekking &amp; Camping
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
