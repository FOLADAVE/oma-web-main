import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ChartBarSquareIcon,
  CodeBracketSquareIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Website Design | Oma Services",
  description: "Professionally designed, fast, and user-friendly websites for businesses, schools, and personal brands.",
};

const offerings = [
  {
    title: "Website Design",
    description: "Custom layouts built to reflect your brand identity — clean, modern, and built to convert visitors into clients.",
    icon: PaintBrushIcon,
  },
  {
    title: "Website Management",
    description: "Ongoing maintenance, content updates, and performance monitoring so your site stays fast and accurate.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Website Marketing",
    description: "SEO optimisation, content strategy, and digital positioning to drive the right traffic to your site.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Website Advertising",
    description: "Paid campaign setup and management across Google and Meta to get your website in front of the right audience.",
    icon: ChartBarSquareIcon,
  },
];

const process = [
  { step: "1", title: "Discovery", desc: "We learn your goals, audience, and brand before touching any design." },
  { step: "2", title: "Design", desc: "High-fidelity mockups you can review and feedback on before a single line of code." },
  { step: "3", title: "Build", desc: "Development using modern frameworks — fast, accessible, and mobile-ready." },
  { step: "4", title: "Launch", desc: "Deployment to your domain with a full handover and support period." },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1e2a5e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9922a] font-semibold text-sm mb-3">Website Design</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Your brand deserves a website that works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We design and build websites that are fast, visually sharp, and built around your audience —
            not generic templates.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
              Start your project
            </button>
          </a>
        </div>
      </section>

      {/* Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8">What&apos;s included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
            >
              <div className="shrink-0 rounded-xl bg-[#f0f4ff] p-4">
                <item.icon aria-hidden="true" className="h-8 w-8 text-[#1e2a5e]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e2a5e] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e2a5e] mb-10 text-center">How we work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e2a5e] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h4 className="font-semibold text-[#1e2a5e] mb-2">{p.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a5e] py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Let&apos;s build something great</h2>
        <p className="text-gray-300 mb-6">Tell us about your project and we&apos;ll put together a plan.</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
            Get in touch
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}