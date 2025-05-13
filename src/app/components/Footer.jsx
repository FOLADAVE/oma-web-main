import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 font-semibold">
      <div className="container mx-auto">
        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-950">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-950">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-950">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-950">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/dictionandphonicsman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/communication_15047527.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a
              href="mailto:partnerships@omadiction.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/email_719662.png"
                alt="Email"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@dictionoracle8254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/youtube_255305.png"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Oma Diction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;