
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-slate-100 mx-auto my-10 px-5" id="about">
      {/* Main About Section */}
      <div className="sm:flex items-center">
        {/* Left Section */}
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="/images/Oma-pic.JPG"
              alt="About Us Image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">OMA DICTION</span>
            </h2>
            <p className="font-lato text-gray-700">
              At OMA DICTION, we are dedicated to fostering effective communication skills
              through the art of diction and language proficiency. Our passion for education spans
              generations, as we empower both young minds and seasoned learners in their journey to master
              the art of language.
            </p>
            <p className="font-lato text-gray-700 mt-2">
            Our vision at OMA Diction is to be a globally recognized leader in language education,
            setting the standard for excellence in communication skills.
            </p>
          </div>
        </div>
      </div>
      <h2 className="font-lato text-center mt-20 font-bold text-3xl sm:text-4xl text-indigo-900">What we offer</h2>
      <div className="programs mx-auto mt-16 w-[90%] flex flex-wrap items-center justify-between gap-6">
      {/* Program 1 */}
      <div className="program relative flex-[31%] sm:w-full mb-6">
        <Image
          src="/images/DSC_6849.JPG" // Replace with your image path
          alt="Program 1"
          className="w-full rounded-lg block"
          width={300}
          height={200}
        />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-lg flex items-center justify-center flex-col text-white opacity-0 cursor-pointer transition-all duration-400 hover:opacity-100">
          <Image
            src="/images/program-icon-1.png" // Replace with your icon path
            alt="Program Icon 1"
            className="w-16 mb-2"
            width={60}
            height={60}
          />
          <p>Adaptivity</p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="program relative flex-[31%] sm:w-full mb-6">
        <Image
          src="/images/DSC_6802.JPG" // Replace with your image path
          alt="Program 2"
          className="w-full rounded-lg block"
          width={300}
          height={200}
        />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-lg flex items-center justify-center flex-col text-white opacity-0 cursor-pointer transition-all duration-400 hover:opacity-100">
          <Image
            src="/images/program-icon-2.png" // Replace with your icon path
            alt="Program Icon 2"
            className="w-12 mb-2 sm:w-12 sm:h-16"
            width={60}
            height={60}
          />
          <p>Oral Excellence</p>
        </div>
      </div>

      {/* Program 3 */}
      <div className="program relative flex-[31%] sm:w-full mb-6">
        <Image
          src="/images/DSC_6811.JPG" // Replace with your image path
          alt="Program 3"
          className="w-full h-60 rounded-lg block"
          width={300}
          height={200}
        />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-lg flex items-center justify-center flex-col text-white opacity-0 cursor-pointer transition-all duration-400 hover:opacity-100">
          <Image
            src="/images/program-icon-3.png" // Replace with your icon path
            alt="Program Icon 3"
            className="w-16 mb-2"
            width={60}
            height={60}
          />
          <p>Flawless English</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
