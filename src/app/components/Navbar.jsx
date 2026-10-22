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

  // Helper to check if a main link or dropdown sub-route is active
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-indigo-950 lg:bg-customBlue sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/oma-logo.png"
            alt="Oma Logo"
            width={50}
            height={50}
            className="mr-2"
            priority
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
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive(link.path) || services.some((s) => pathname === s.path)
                      ? "text-[#c9922a]"
                      : "text-white lg:text-blue-900 hover:text-[#c9922a] lg:hover:text-[#c9922a]"
                  }`}
                >
                  {link.title}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </Link>

                {/* Dropdown Menu - Fixed hover dead zone */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          href={s.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === s.path
                              ? "bg-[#f0f4ff] text-[#c9922a] font-semibold"
                              : "text-gray-700 hover:bg-[#f0f4ff] hover:text-[#1e2a5e]"
                          }`}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-[#c9922a]"
                    : "text-white lg:text-blue-900 hover:text-[#c9922a] lg:hover:text-[#c9922a]"
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:partnerships@omadiction.pro"
          className="hidden md:block px-4 py-2 bg-[#c9922a] text-white text-sm font-semibold rounded-lg hover:bg-[#b07e24] transition-colors shadow-sm"
        >
          Get in touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle navigation menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {navbarOpen && (
        <div className="md:hidden bg-indigo-950 border-t border-white/10">
          <ul className="flex flex-col py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`block py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#c9922a]"
                      : "text-gray-200 hover:text-white"
                  }`}
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-2">
              <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">
                Services
              </p>
              {services.map((s) => (
                <Link
                  key={s.path}
                  href={s.path}
                  className={`block py-2 text-sm transition-colors ${
                    pathname === s.path
                      ? "text-[#c9922a] font-medium"
                      : "text-gray-300 hover:text-[#c9922a]"
                  }`}
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