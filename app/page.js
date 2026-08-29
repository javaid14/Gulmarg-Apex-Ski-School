import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Smile,
  Snowflake,
  Truck,
  ArrowRight,
} from "lucide-react";
import PackageCard from "@/components/PackageCard";
import ActivityCard from "@/components/ActivityCard";
import Testimonial from "@/components/Testimonial";
import { packages, tours, treks } from "@/data/packages";
import { activities } from "@/data/activities";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative slope-edge bg-alpine-950 pb-28 pt-28 md:pt-36 md:pb-40">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-950/60 via-alpine-950/70 to-alpine-950" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-ember-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-snow text-balance leading-[1.05] mb-6">
            Gulmarg Apex Ski School
          </h1>
          <p className="text-ice-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Experience the thrill of skiing in the breathtaking Himalayas at
            Gulmarg &mdash; pristine slopes, stunning views, and an adrenaline
            rush like no other.
          </p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-ember-500 hover:bg-ember-600 transition-colors px-8 py-4 font-semibold text-alpine-950"
          >
            Our Packages <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Snowflake,
              title: "Top-Notch Skiing & Snowboarding Gear",
              text: "Premium, well-maintained equipment to ensure your safety and performance on the slopes.",
            },
            {
              icon: Award,
              title: "High-Quality Equipment",
              text: "Sourced from leading brands, offering the latest technology and comfort on the mountain.",
            },
            {
              icon: Truck,
              title: "Easy Transportation Services",
              text: "Hassle-free, reliable travel to and from the slopes so you can focus on the adventure.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white shadow-lg shadow-alpine-950/5 p-8 border border-alpine-950/5"
            >
              <f.icon className="h-9 w-9 text-ember-500 mb-4" />
              <h3 className="font-display font-semibold text-lg text-alpine-950 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skiing & Snowboarding Packages */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Packages
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-alpine-950 mb-4">
            Skiing and Snowboarding Packages
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Explore our tailored packages designed for all skill levels,
            offering guided slopes, top-quality gear, and exclusive access to
            the best skiing and snowboarding spots.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative slope-edge-top bg-alpine-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-ember-400 font-semibold uppercase tracking-widest text-sm mb-3 pt-4">
              Why Choose Us
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-snow mb-4">
              Unparalleled expertise, top-tier gear, hassle-free service
            </h2>
            <p className=" text-snow leading-relaxed">
              From high-quality equipment to convenient transportation, we
              ensure every aspect of your adventure is seamless, safe, and full
              of excitement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety First",
                text: "Your well-being is our top priority, with expert guidance and top-quality gear.",
              },
              {
                icon: Award,
                title: "Experience",
                text: "Years of industry experience delivering expert knowledge and seamless service.",
              },
              {
                icon: Smile,
                title: "Satisfaction",
                text: "A personalized experience that guarantees your satisfaction and lasting memories.",
              },
            ].map((f) => (
              <div key={f.title}>
                <f.icon className="h-9 w-9 text-ember-500 mb-4" />
                <h3 className="font-display font-semibold text-xl text-snow mb-2">
                  {f.title}
                </h3>
                <p className="text-snow leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour packages */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Tours
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-alpine-950 mb-4">
            Tour Packages
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Discover a range of expertly crafted tour packages, offering
            thrilling adventures, scenic views, and unforgettable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Trekking and camping */}
      <section className="bg-ice-100/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
              Trekking &amp; Camping
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-alpine-950 mb-4">
              Trekking and Camping
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Explore stunning landscapes, immerse yourself in nature, and enjoy
              an authentic outdoor experience, guided by experts for your safety
              and enjoyment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treks.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Activities
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-alpine-950 mb-4">
            Activities
          </h2>
          <p className="text-slate-600 leading-relaxed">
            ATV rides, snow biking, cozy bonfires, and Gondola rides above the
            snowy landscape &mdash; fun and adventure for every thrill-seeker.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a) => (
            <ActivityCard key={a.slug} activity={a} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative slope-edge-top bg-alpine-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-ember-400 font-semibold uppercase tracking-widest text-sm mb-3 pt-4">
              Testimonials
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-snow mb-4">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              name="Colby Weintraub"
              quote="The most incredible of adventures. My guide knew so much about the mountain, and the shop had a great selection of touring gear perfect for backcountry skiing."
            />
            <Testimonial
              name="Nidhi Ostwal"
              quote="The service was excellent. Our instructor was friendly, patient, and incredibly helpful, making skiing feel easy, comfortable, and thoroughly enjoyable."
            />
            <Testimonial
              name="Vijeth Patil"
              quote="A very good snowboarding experience with a lot to learn from the instructors. Highly recommended for anyone picking up snowboarding for the first time."
            />
          </div>
        </div>
      </section>
    </>
  );
}
