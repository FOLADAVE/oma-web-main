import React from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  PlayCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 font-medium">
      <div className="container mx-auto px-6">
        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Links Section */}
          <div className="text-center md:text-left">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-6">
            <a
              href="https://web.facebook.com/dictionandphonicsman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#1e2a5e] hover:text-[#c9922a] transition-colors"
            >
              <UserGroupIcon aria-hidden="true" className="h-7 w-7" />
            </a>
            <a
              href="mailto:partnerships@omadiction.pro"
              aria-label="Email Oma Diction"
              className="text-[#1e2a5e] hover:text-[#c9922a] transition-colors"
            >
              <EnvelopeIcon aria-hidden="true" className="h-7 w-7" />
            </a>
            <a
              href="https://www.youtube.com/@dictionoracle8254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#1e2a5e] hover:text-[#c9922a] transition-colors"
            >
              <PlayCircleIcon aria-hidden="true" className="h-7 w-7" />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Oma Diction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;