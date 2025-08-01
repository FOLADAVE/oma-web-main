import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Register from "./Register";


const RegistrationPage = () => {
  return (
     <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <Navbar />
      <Register />
      <Footer />
    </main>
  );
};

export default RegistrationPage;