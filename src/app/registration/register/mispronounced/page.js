import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MispronouncedHome from "./Mispronounced";


const MispronouncedPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 flex flex-col">
       <MispronouncedHome />
      </div>
      <Footer />
    </main>
  );
};

export default MispronouncedPage;