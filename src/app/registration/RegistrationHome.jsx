import React from "react";
import Image from "next/image";
import Link from "next/link";

const RegistrationHome = () => {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/images/diction-awards.jpg"
          alt="Diction Award"
          width={300}
          height={300}
          className="mb-6"
        />
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
          2024 OMA Diction Awards Competition
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Welcome to the 9th edition of the Lagos OMA Diction Awards Competition!
        </p>
        <Link href="/registration/register">
          <button className="bg-blue-900 text-white text-lg px-10 py-3 rounded-lg hover:bg-blue-800 transition">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationHome;