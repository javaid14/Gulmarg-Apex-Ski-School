import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ActivityCard({ activity }) {
  return (
    <Link
      href={`/activities/${activity.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl h-80"
    >
      <Image
        src={activity.image}
        alt={activity.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-alpine-950/90 via-alpine-950/20 to-transparent" />
      <div className="relative mt-auto p-6">
        <h3 className="font-display font-semibold text-xl text-snow mb-1">{activity.title}</h3>
        <p className="text-sm text-ice-200 line-clamp-2 mb-3">{activity.summary}</p>
        <span className="flex items-center gap-1 text-sm font-semibold text-ember-400">
          View Details <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
