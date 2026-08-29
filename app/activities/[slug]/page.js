import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivityBySlug } from "@/data/activities";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const activity = getActivityBySlug(params.slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | Gulmarg Ski Himalaya`,
    description: activity.summary,
  };
}

export default function ActivityDetailPage({ params }) {
  const activity = getActivityBySlug(params.slug);
  if (!activity) return notFound();

  return (
    <div>
      <section className="relative h-[46vh] min-h-[340px] w-full">
        <Image
          src={withBasePath(activity.image)}
          alt={activity.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-950 via-alpine-950/50 to-alpine-950/20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-8 pb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-snow max-w-3xl text-balance">
            {activity.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          {activity.description}
        </p>
        <Link
          href="/contact-us"
          className="inline-block rounded-full bg-ember-500 hover:bg-ember-600 transition-colors px-8 py-4 font-semibold text-alpine-950"
        >
          Enquire Now
        </Link>
      </section>
    </div>
  );
}
