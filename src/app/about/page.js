import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Abouthome from "@/app/about/AboutHome";  // ✅ Absolute import path

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-customBlue text-white">
      <Navbar />
      <Abouthome />
      <Footer />
    </main>
  );
};

export default AboutPage;
