import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ArrowPathRoundedSquareIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Mobile App Engineering | Oma Services",
  description: "Custom mobile applications for Android and iOS — designed, built, and launched for your business.",
};

const offerings = [
  {
    title: "App Design",
    description: "Intuitive UI/UX design that puts your users first — clean interfaces, logical flows, and visual consistency.",
    icon: PaintBrushIcon,
  },
  {
    title: "App Development",
    description: "Cross-platform and native mobile apps engineered to be fast, stable, and ready for both Android and iOS.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "App Management",
    description: "Post-launch maintenance, version updates, performance monitoring, and bug fixes to keep your app running smoothly.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    title: "App Marketing",
    description: "App Store Optimisation (ASO) and digital campaigns to drive downloads and grow your user base.",
    icon: ChartBarSquareIcon,
  },
];

const features = [
  "Android & iOS support",
  "Offline capability",
  "Push notifications",
  "Secure authentication",
  "Payment integration",
  "Analytics & reporting",
];

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1e2a5e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9922a] font-semibold text-sm mb-3">Mobile App Engineering</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Apps that people actually use
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We engineer mobile applications that are fast, reliable, and built around real user behaviour —
            from first wireframe to App Store listing.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
              Discuss your app
            </button>
          </a>
        </div>
      </section>

      {/* Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8">Our mobile services</h2>
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

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8 text-center">Built-in from the start</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 bg-[#f0f4ff] rounded-lg px-4 py-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#c9922a] shrink-0" />
                <span className="text-sm font-medium text-[#1e2a5e]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a5e] py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Have an app idea?</h2>
        <p className="text-gray-300 mb-6">Share your vision and we&apos;ll help you scope, design, and build it.</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
            Let&apos;s talk
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}