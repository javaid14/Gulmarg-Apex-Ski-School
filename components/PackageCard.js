import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

export default function PackageCard({ pkg }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-alpine-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-alpine-950/80 backdrop-blur px-3 py-1 text-xs font-semibold text-ember-400">
          {pkg.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display font-semibold text-lg text-alpine-950 mb-1.5">
          {pkg.title}
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-alpine-700/70 mb-3">
          <Clock className="h-4 w-4" /> {pkg.duration}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
          {pkg.summary}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-display font-bold text-alpine-950">
            {pkg.price}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-ember-600 group-hover:gap-2 transition-all">
            View Details <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
