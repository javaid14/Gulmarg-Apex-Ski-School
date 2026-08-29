"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Mountain } from "lucide-react";
import { packages, tours, treks } from "@/data/packages";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const allLinks = [...packages, ...tours, ...treks];

export default function Footer() {
  return (
    <footer className="bg-alpine-950 text-ice-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-snow mb-4">
            <Link
              href="/"
              className="relative flex h-24 w-40 items-center"
              onClick={() => setOpen(false)}
            >
              <Image
                src={withBasePath("/images/logo/logoblue-amber.png")}
                alt="Gulmarg Apex Ski School"
                fill
                className="px-2"
                priority
              />
            </Link>
            <span className="font-display font-bold">
              Gulmarg Apex Ski School
            </span>
          </div>
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
          <ul className="space-y-2.5 text-sm max-h-64 overflow-hidden">
            {allLinks.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/packages/${p.slug}`}
                  className="hover:text-ember-400 transition-colors"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-snow mb-4 text-sm tracking-wide uppercase">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-5 w-5 shrink-0 text-ember-500" /> Gulmarg,
              Jammu and Kashmir 193403
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-5 w-5 shrink-0 text-ember-500" /> +91
              7051566436
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-5 w-5 shrink-0 text-ember-500" />{" "}
              info@gulmargapexskischool.com
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
