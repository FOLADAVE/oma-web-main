import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="font-lato bg-gray-50 py-16 px-6" id="contact">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 uppercase tracking-wide">
          Contact Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        {/* Left: Contact Information */}
        <div className="lg:w-1/2 space-y-8">
          <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600 leading-relaxed">
            Thank you for your interest in OMA DICTION. We are here to assist
            you and provide the information you need. Whether you have questions
            about our programs, want to inquire about enrollment, or have
            general inquiries, we&apos;re just a message away.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <Image
                src="/images/mail-icon.png"
                alt="Email Icon"
                width={24}
                height={24}
              />
              <span className="text-sm text-gray-800 font-medium">
                partnerships@omadiction.pro
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/2 bg-transparent rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form
            action="https://submit-form.com/LvrjBvQzY"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                required
                className="resize-none w-full border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Submit now →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
