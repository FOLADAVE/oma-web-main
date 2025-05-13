
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactPage from "@/app/contact/ContactHome";


const ContactPageComponent = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
};

export default ContactPageComponent;