import Image from "next/image";
import { Medal, Trophy, Globe2, Award } from "lucide-react";

const ACHIEVEMENTS = [
  { icon: Medal, text: "5× National Gold Medalist" },
  { icon: Trophy, text: "4× Khelo India Gold Medalist" },
  { icon: Trophy, text: "3× AIU Games Gold Medalist" },
  { icon: Globe2, text: "International Representative of India" },
  { icon: Globe2, text: "Asian Championships, China" },
  { icon: Award, text: "5× European Training Experience" },
];

export default function FounderSpotlight() {
  return (
    <section className="bg-alpine-950 py-20 slope-edge-top">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[9/12] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/about/founder-faizan.jpeg"
              alt="Faizan, Founder of Gulmarg Apex Ski School"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-ember-400 font-semibold uppercase tracking-widest text-sm mb-3">
              About the Founder
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-snow mb-3">
              Meet Faizan
            </h2>
            <p className="text-ice-300 font-medium mb-6">
              Founder &amp; Professional Skier
            </p>

            <p className="text-ice-200 leading-relaxed mb-4">
              Born and raised in Gulmarg, Kashmir, Faizan started skiing at the
              age of just 4. What began as a childhood passion developed into a
              successful competitive skiing career, leading him to represent
              India at numerous international competitions, including the Asian
              Championships in China.
            </p>
            <p className="text-ice-200 leading-relaxed mb-4">
              With extensive international exposure, Faizan has trained in
              Europe five times, gaining experience with advanced skiing
              techniques and international training standards.
            </p>
            <p className="text-ice-200 leading-relaxed mb-8">
              After years of competing and training at the highest levels,
              Faizan founded Gulmarg Apex Ski School to share his knowledge and
              experience with skiers and snowboarders of all levels, turning his
              own journey from Gulmarg&apos;s slopes at age 4 to representing
              India internationally into a path others can follow too.
            </p>

            <h3 className="font-display font-semibold text-snow mb-4 text-sm tracking-wide uppercase">
              Career Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ACHIEVEMENTS.map((a) => (
                <li
                  key={a.text}
                  className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3"
                >
                  <a.icon className="h-5 w-5 text-ember-400 shrink-0" />
                  <span className="text-sm text-ice-100">{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
