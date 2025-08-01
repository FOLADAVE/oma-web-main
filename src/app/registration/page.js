import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationHome from "@/app/registration/RegistrationHome";

const RegistrationPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <Navbar />
      <RegistrationHome />
      <Footer />
    </main>
  );
};

export default RegistrationPage;