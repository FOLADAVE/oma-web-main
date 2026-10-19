"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const services = [
  { title: "Professional Diction", path: "/diction" },
  { title: "Website Design", path: "/web-design" },
  { title: "Mobile Apps", path: "/mobile-apps" },
  { title: "Web Applications", path: "/web-apps" },
];

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services", hasDropdown: true },
  { title: "Registration", path: "/registration" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
   <nav className="bg-indigo-950 md:bg-indigo-950 lg:bg-customBlue sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/oma-logo.png"
            alt="Oma Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-blue-900 hover:text-[#c9922a] transition-colors text-sm font-medium">
                  {link.title}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        href={s.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f0f4ff] hover:text-[#1e2a5e] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-[#c9922a]"
                    : "text-blue-900 hover:text-[#c9922a]"
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="mailto:partnerships@omadiction.pro"
          className="hidden md:block px-4 py-2 bg-[#c9922a] text-white text-sm font-semibold rounded-lg hover:bg-[#b07e24] transition-colors"
        >
          Get in touch
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-[#162050] border-t border-white/10">
          <ul className="flex flex-col py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`block py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "text-[#c9922a]"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <p className="text-xs text-gray-500 mb-2 font-medium">Services</p>
              {services.map((s) => (
                <Link
                  key={s.path}
                  href={s.path}
                  className="block py-2 text-sm text-gray-400 hover:text-[#c9922a] transition-colors"
                  onClick={() => setNavbarOpen(false)}
                >
                  — {s.title}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;