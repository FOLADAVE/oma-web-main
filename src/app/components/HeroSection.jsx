"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const services = [
  { label: "Professional Diction", href: "/diction" },
  { label: "Website Design", href: "/web-design" },
  { label: "Mobile App Engineering", href: "/mobile-apps" },
  { label: "Web Applications", href: "/web-apps" },
];

const HeroSection = () => {
  return (
    <section className="bg-[#f6f9fc]" id="home">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="col-span-7">
          <p className="text-[#c9922a] font-semibold text-sm mb-3">
            Welcome to Oma Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e2a5e] leading-tight mb-4">
            <TypeAnimation
              sequence={[
                "Speak with clarity.",
                1200,
                "Build with purpose.",
                1200,
                "Grow with confidence.",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#425466] text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
            From world-class diction training to cutting-edge digital products —
            Oma Services helps individuals and organisations communicate better and build smarter.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-full border border-[#1e2a5e] text-[#1e2a5e] text-sm font-medium hover:bg-[#1e2a5e] hover:text-white transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 rounded-lg bg-[#1e2a5e] text-white font-semibold hover:bg-[#162050] transition-colors">
                Start a project
              </button>
            </a>
            <Link href="/services">
              <button className="px-6 py-3 rounded-lg border-2 border-[#c9922a] text-[#c9922a] font-semibold hover:bg-[#c9922a] hover:text-white transition-colors">
                See all services
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-5 flex justify-center">
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-indigo-950 border-rose-900 border-8 w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] relative items-center justify-center animate-bounce-slow max-920:animate-pulse-slow">
            <Image
              src="/images/oma-hero.png"
              alt="oma image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={310}
              height={310}
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;