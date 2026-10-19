import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PuzzlePieceIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Professional Diction | Oma Services",
  description: "World-class diction training, speech therapy, phonics, and language coaching for individuals and schools.",
};

const dictionServices = [
  {
    title: "Speech Therapy",
    description: "Targeted correction of pronunciation patterns, accent reduction, and vocal clarity for confident everyday communication.",
    icon: SpeakerWaveIcon,
  },
  {
    title: "Diction Training",
    description: "Structured class-by-class programmes that sharpen articulation, rhythm, and delivery for students and professionals alike.",
    icon: AcademicCapIcon,
  },
  {
    title: "Phonics Classes",
    description: "Building strong reading and spelling foundations through phonemic awareness — ideal for young learners and remedial learners.",
    icon: BookOpenIcon,
  },
  {
    title: "Diction Club",
    description: "A community programme where members practise together, receive peer feedback, and build lasting communication confidence.",
    icon: UserGroupIcon,
  },
  {
    title: "Social Polish",
    description: "Etiquette and communication coaching for professional settings — interviews, presentations, networking, and public speaking.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Diction Games",
    description: "Interactive linguistic challenges and activities that make learning pronunciation engaging for children and adults.",
    icon: PuzzlePieceIcon,
  },
];

const galleryImages = [
  "/images/DSC_6524[40].JPG",
  "/images/DSC_6811.JPG",
  "/images/DSC_6802.JPG",
  "/images/DSC_6580.JPG",
  "/images/DSC_6823.JPG",
  "/images/DSC_6849.JPG",
];

export default function DictionPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1e2a5e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9922a] font-semibold text-sm mb-3">Professional Diction</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Speak English with clarity and confidence
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            OMA has trained thousands of students and professionals across Nigeria to master spoken English —
            from phonics fundamentals to advanced speech delivery.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
              Enrol now
            </button>
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          {[
            { value: "10+", label: "Years training" },
            { value: "50+", label: "Partner schools" },
            { value: "10,000+", label: "Students trained" },
            { value: "830+", label: "Positive reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#1e2a5e]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#1e2a5e] mb-8">What we offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionServices.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#f0f4ff] p-3">
                <service.icon aria-hidden="true" className="h-8 w-8 text-[#1e2a5e]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e2a5e] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diction Awards */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e2a5e]">The Diction Awards</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
              Each year we celebrate exceptional communicators who have demonstrated mastery of spoken and written English.
            </p>
          </div>
          <div className="mb-10 flex justify-center">
            <Image
              src="/images/diction-awards.jpg"
              alt="Diction Awards"
              width={680}
              height={340}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Awards gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a5e] py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to transform how you speak?</h2>
        <p className="text-gray-300 mb-6">Register for a programme or reach out to discuss group training for your school or organisation.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/registration">
            <button className="px-6 py-3 bg-[#c9922a] text-white font-semibold rounded-lg hover:bg-[#b07e24] transition-colors">
              Register
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e2a5e] transition-colors">
              Contact us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}