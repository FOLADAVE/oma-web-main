import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Service = () => {
  return (
    <section className="bg-slate-200 text-indigo-600 py-12">
      <div className="text-center mb-12" id="services">
        <h2 className="text-3xl font-bold">Explore Our Services</h2>
        <p className="text-paragraphColor mt-6 font-medium max-w-2xl mx-auto">
          Welcome to our comprehensive range of services designed to meet your diverse needs.
          Discover how we can elevate your expectations.
        </p>

        {/* Image after paragraph */}
        <div className="mt-8 flex justify-center">
          <div className="p-2 bg-white rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/oma-ads.jpg" // <-- replace with your image path
              alt="Our Services"
              width={400}   // reduced width
              height={160}  // reduced height
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Button to Services Page */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
};

export default Service;
