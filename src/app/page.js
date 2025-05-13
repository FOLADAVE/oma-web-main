import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
      <main className="scroll-smooth flex min-h-screen flex-col bg-customBlue text-customGrey mx-auto">
        <Navbar />
         <HeroSection />
         <About />
         <Service />
         <Contact />
         <Footer />
      </main>
  );
}
