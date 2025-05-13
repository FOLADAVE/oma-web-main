import React from "react";
import Image from "next/image";


const AboutPage = () => {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-rose-600 font-semibold mb-2 border-b-2 border-indigo-60">How It Started</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Dream is <br /> Global Learning <br /> Transformation
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
          At OMA, we are dedicated to fostering effective communication skills through the art of diction and language proficiency. 
          Our passion for education spans generations, as we empower both young minds and seasoned learners in their journey
           to master the art of language.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="bg-blue-100 rounded-2xl p-4">
            <Image
                      src="/images/DSC_6849.JPG" // Replace with your image path
                      alt="Program 1"
                      className="w-full rounded-lg block"
                      width={500}
                      height={350}
                    />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">10</h2>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">50+</h2>
            <p className="text-gray-600 text-sm">Schools</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">830+</h2>
            <p className="text-gray-600 text-sm">Positive Reviews</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">10K</h2>
            <p className="text-gray-600 text-sm">Trusted Students</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center py-16 px-8">
  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
  OMA&apos;s Mission
  </span>
  <h2 className="text-4xl font-bold text-indigo-600 mt-4">
  English Mastery
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mt-4">
  We equip individuals with top-tier English skills, ensuring effective communication for success.
  </p>
  <div className="mt-8 w-full max-w-4xl">
    <Image
      src="/images/Oma-pic.JPG"
      alt="Business professionals walking"
      className="rounded-xl shadow-lg"
      width="800"
      height="400"
    />
  </div>
  <h3 className="font-bold bg-gray-200 text-indigo-600  px-4 py-2 rounded-full mt-4">
  The Diction Oracle
  </h3>
</section>

    </main>
  );
};

export default AboutPage;
