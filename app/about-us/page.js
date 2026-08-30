import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Smile, Medal, Trophy, Globe2 } from "lucide-react";
import FounderSpotlight from "@/components/FounderSpotlight";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "About Us | Gulmarg Apex Ski School",
  description:
    "Learn about Gulmarg Apex Ski School, a premium skiing and adventure tourism outfit based in Gulmarg, Kashmir, founded by professional skier Faizan.",
};

const ACHIEVEMENTS = [
  { icon: Medal, text: "5× National Gold Medalist" },
  { icon: Trophy, text: "4× Khelo India Gold Medalist" },
  { icon: Trophy, text: "3× AIU Games Gold Medalist" },
  { icon: Globe2, text: "International Representative of India" },
  { icon: Globe2, text: "Asian Championships — China" },
  { icon: Award, text: "5× European Training Experience" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Expert guidance and top-quality gear at every step of your adventure.",
  },
  {
    icon: Award,
    title: "Experience",
    text: "Years of local, on-the-ground expertise across skiing, touring, and trekking.",
  },
  {
    icon: Smile,
    title: "Satisfaction",
    text: "A personalized experience that leaves you with lasting memories.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] w-full">
        <Image
          src={"/images/hero/hero-5.jpeg"}
          alt="Snow-covered mountains in Gulmarg"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-950 via-alpine-950/50 to-alpine-950/10" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-8 pb-12">
          <p className="text-ember-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Story
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-snow">
            About Us
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          <strong>Gulmarg Apex Ski School</strong> is a locally rooted skiing
          and adventure tourism outfit based in Gulmarg, Jammu &amp; Kashmir. We
          connect travellers from around the world with the Himalayas&apos;
          legendary slopes; through expert instruction, quality gear, and
          seamless logistics.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Whether you&apos;re taking your first run down a beginner slope or
          chasing backcountry powder off the Gondola, our instructors and guides
          are with you at every step, so the only thing you need to focus on is
          the mountain.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Founded by a national-level competitive skier and built on years of
          hands-on mountain experience, our school blends professional-grade
          technique with the warmth of a local team that knows Gulmarg&apos;s
          slopes better than anyone.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <div className="relative col-span-2 row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-2xl">
            <Image
              src={"/images/about/gallery-1.jpeg"}
              alt="Skiing in Gulmarg"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={"/images/about/gallery-2.jpeg"}
              alt="Gulmarg Gondola"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={"/images/about/gallery-3.jpeg"}
              alt="Snowboarding instruction"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={"/images/about/gallery-4.jpeg"}
              alt="Group ski lesson"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={"/images/about/gallery-5.jpeg"}
              alt="Backcountry skiing near Gulmarg"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <FounderSpotlight />

      {/* Values */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-alpine-950/10 p-7"
            >
              <f.icon className="h-8 w-8 text-ember-500 mb-3" />
              <h3 className="font-display font-semibold text-lg text-alpine-950 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ice-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-alpine-950 mb-4">
            Ready to Hit the Slopes?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join Faizan and the team for expert-led skiing, snowboarding, and
            adventure experiences in the heart of Gulmarg.
          </p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-ember-500 hover:bg-ember-600 transition-colors px-8 py-4 font-semibold text-alpine-950"
          >
            Explore Our Packages
          </Link>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
