import Image from "next/image";
import { ShieldCheck, Award, Smile } from "lucide-react";

export const metadata = {
  title: "About Us | Gulmarg Apex Ski School",
  description:
    "Learn about Gulmarg Apex Ski School, a premium skiing and adventure tourism outfit based in Gulmarg, Kashmir.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=1600&auto=format&fit=crop"
          alt="Snow-covered mountains in Gulmarg"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-950 via-alpine-950/50 to-alpine-950/10" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 lg:px-8 pb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-snow">
            About Us
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Gulmarg Apex Ski School is a locally rooted skiing and adventure
          tourism outfit based in Gulmarg, Jammu &amp; Kashmir. We connect
          travellers from around the world with the Himalayas&apos; legendary
          slopes &mdash; through expert instruction, quality gear, and seamless
          logistics.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-14">
          Whether you&apos;re taking your first run down a beginner slope or
          chasing backcountry powder off the Gondola, our instructors and guides
          are with you at every step, so the only thing you need to focus on is
          the mountain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((f) => (
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
    </div>
  );
}
