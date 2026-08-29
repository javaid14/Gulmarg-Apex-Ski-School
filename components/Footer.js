"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { packages, tours, treks } from "@/data/packages";
import Image from "next/image";

const allLinks = [...packages, ...tours, ...treks];
const FOOTER_PACKAGE_LIMIT = 6;

export default function Footer() {
  return (
    <footer className="bg-alpine-950 text-ice-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className=" -mt-4 flex items-start text-snow">
            <div className="relative h-16 w-32">
              <Image
                src={"/images/logo/logoblue-amber.png"}
                alt="Gulmarg Apex Ski School"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <p className="mb-4 font-display font-bold leading-tight whitespace-nowrap">
            Gulmarg Apex Ski School
          </p>
          <p className="text-sm text-ice-400 leading-relaxed">
            Premium skiing, snowboarding, and adventure tourism experiences in
            Gulmarg, Kashmir.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-snow mb-4 text-sm tracking-wide uppercase">
            Important Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/cancellation-and-refund-policy"
                className="hover:text-ember-400 transition-colors"
              >
                Cancellation / Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-ember-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-ember-400 transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className="hover:text-ember-400 transition-colors"
              >
                All Packages
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className="hover:text-ember-400 transition-colors"
              >
                Activities
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-snow mb-4 text-sm tracking-wide uppercase">
            All Packages
          </h4>
          <ul className="space-y-2.5 text-sm">
            {allLinks.slice(0, FOOTER_PACKAGE_LIMIT).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/packages/${p.slug}`}
                  className="hover:text-ember-400 transition-colors"
                >
                  {p.title}
                </Link>
              </li>
            ))}
            {allLinks.length > FOOTER_PACKAGE_LIMIT && (
              <li>
                <Link
                  href="/packages"
                  className="font-semibold text-ember-400 hover:text-ember-300 transition-colors"
                >
                  View All Packages &rarr;
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-snow mb-4 text-sm tracking-wide uppercase">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-5 w-5 shrink-0 text-ember-500 mt-0.5" />
              <span>Gulmarg, Jammu and Kashmir 193403</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-5 w-5 shrink-0 text-ember-500" />
              <a
                href="tel:+917051566436"
                className="hover:text-ember-400 transition-colors"
              >
                +91 7051566436
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-5 w-5 shrink-0 text-ember-500" />
              <a
                href="mailto:admin@gulmargapexskischool.com"
                className="hover:text-ember-400 transition-colors"
              >
                admin@gulmargapexskischool.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-ice-400">
          © {new Date().getFullYear()} Gulmarg Apex Ski School. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
