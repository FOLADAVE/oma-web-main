import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  BoltIcon,
  BookOpenIcon,
  ShareIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Web Applications | Oma Services",
  description: "Custom web applications — portals, dashboards, SaaS tools, and internal systems built for performance.",
};

const offerings = [
  {
    title: "Custom Web Portals",
    description: "Multi-user platforms with role-based access — school portals, client dashboards, booking systems, and more.",
    icon: Squares2X2Icon,
  },
  {
    title: "Business Automation",
    description: "Web tools that replace manual spreadsheet workflows — inventory, invoicing, scheduling, reporting.",
    icon: BoltIcon,
  },
  {
    title: "Social Media Tools",
    description: "Custom tools for scheduling, analytics, and managing your social presence across platforms.",
    icon: ShareIcon,
  },
  {
    title: "Content Platforms",
    description: "Membership sites, e-learning portals, and content hubs with secure access and monetisation built in.",
    icon: BookOpenIcon,
  },
];

const stack = ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel"];

export default function WebAppsPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1e2a5e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9922a] font-semibold text-sm mb-3">Web Applications</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Software built around how your business works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From internal tools to customer-facing platforms, we build web applications that are
            reliable, scalable, and practical to maintain long-term.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
              Scope a project
            </button>
          </a>
        </div>
      </section>

      {/* Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8">What we build</h2>
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

      {/* Tech stack */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8">Our technology stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-[#f0f4ff] text-[#1e2a5e] font-semibold text-sm border border-[#1e2a5e]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a5e] py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Have a problem that needs a web solution?</h2>
        <p className="text-gray-300 mb-6">Walk us through the challenge and we&apos;ll figure out the right approach together.</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
            Start the conversation
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}