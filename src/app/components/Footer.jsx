import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              className="hover:opacity-80"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a
              href="mailto:partnerships@omadiction.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/images/email.png"
                alt="Email"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@dictionoracle8254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/images/youtube.png"
                alt="YouTube"
                width={30}
                height={30}
              />
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