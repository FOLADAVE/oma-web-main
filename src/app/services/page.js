
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceHome from "./ServiceHome";

const ServicePage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <ServiceHome />
      <Footer />
    </main>
  );
};

export default ServicePage;