import React from 'react';
import Link from 'next/link';

const Service = () => {
  return (
    <section className="bg-slate-200 text-indigo-600 py-12">
      <div className="text-center mb-12" id="services">
        <h2 className="text-3xl font-bold">Explore Our Services</h2>
        <p className="text-paragraphColor mt-6 font-medium">
          Welcome to our comprehensive range of services designed to meet your diverse needs.
          Discover how we can elevate your expectations.
        </p>
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